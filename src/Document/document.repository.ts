import { Injectable } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service.js';
import { Prisma, DocumentStatus } from '@prisma/client';

@Injectable()
export class DocumentRepository {
  constructor(private readonly prisma: PrismaService) {}

  // --- 1. LẤY DANH SÁCH & THỐNG KÊ (Dashboard) ---
  async findDocumentByCourtId(filter: any) {
    // Dùng any tạm hoặc update lại type GetDocsFilterInput
    const page = filter.page ?? 1;
    const limit = filter.limit ?? 10;
    const { courtId, fromDate, toDate, status, search, officialId } = filter;
    const skip = (page - 1) * limit;
    const now = new Date();

    // 1. Xây dựng điều kiện lọc ngày tháng linh hoạt
    const dateCondition: any = {};
    if (fromDate) {
      const start = new Date(fromDate);
      start.setHours(0, 0, 0, 0); // Lấy từ 00:00:00 của ngày bắt đầu
      dateCondition.gte = start;
    }
    if (toDate) {
      const end = new Date(toDate);
      end.setHours(23, 59, 59, 999); // Lấy đến 23:59:59 của ngày kết thúc
      dateCondition.lte = end;
    }

    // 2. Xây dựng Where Clause
    const where: Prisma.DocumentWhereInput = {
      courtId: courtId,
      isDeleted: false,
    };

    // Chỉ gán điều kiện receivedDate nếu FE có truyền fromDate hoặc toDate
    if (Object.keys(dateCondition).length > 0) {
      where.receivedDate = dateCondition;
    }

    if (status) {
      where.status = status as DocumentStatus;
    }

    if (officialId) {
      where.responsibleOfficialId = officialId;
    }

    if (search) {
      where.OR = [
        { docCode: { contains: search } },
        { recipient: { contains: search } },
      ];
    }

    // 3. Thực thi query song song
    const [total, documents, statsWaiting, statsOverdue] = await Promise.all([
      this.prisma.document.count({ where }),

      this.prisma.document.findMany({
        where,
        skip,
        take: limit,
        orderBy: { receivedDate: 'desc' },
        include: {
          court: true,
          responsibleOfficial: true,
          creator: true,
        },
      }),

      // Đếm Waiting trong khoảng thời gian
      this.prisma.document.count({
        where: {
          courtId,
          isDeleted: false,
          ...(Object.keys(dateCondition).length > 0 && {
            receivedDate: dateCondition,
          }),
          status: DocumentStatus.WAITING,
        },
      }),

      // Đếm Overdue trong khoảng thời gian
      this.prisma.document.count({
        where: {
          courtId,
          isDeleted: false,
          ...(Object.keys(dateCondition).length > 0 && {
            receivedDate: dateCondition,
          }),
          status: {
            notIn: [DocumentStatus.COMPLETED, DocumentStatus.CONFIRMED],
          },
          dueDate: { lt: now },
        },
      }),
    ]);

    return {
      data: documents,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      statHeader: {
        waiting: statsWaiting,
        overdue: statsOverdue,
      },
    };
  }

  // --- 2. LẤY CHI TIẾT 1 VĂN BẢN ---
  async findDocumentById(id: string) {
    return await this.prisma.document.findUnique({
      // 👇 MỚI: Không lấy văn bản đã xóa
      where: { id, isDeleted: false },
      include: {
        court: true,
        responsibleOfficial: true,
        creator: true,
      },
    });
  }

  // --- 3. TẠO MỚI (Create) ---
  async createSingleDocument(documentPayload: any) {
    const cleanData = this.sanitizePayload(documentPayload);
    return await this.prisma.document.create({
      data: cleanData,
    });
  }

  async createMultiDocument(documentPayload: any[]) {
    const cleanDataList = documentPayload.map((item) =>
      this.sanitizePayload(item),
    );
    return await this.prisma.document.createMany({
      data: cleanDataList,
    });
  }

  // --- 4. CẬP NHẬT (Update) ---
  async updateDocument(input: any) {
    const { id, ...data } = input;

    // Logic Tự động đổi Status dựa vào ảnh bằng chứng
    let statusToUpdate = data.status;
    if (data.evidenceUrl) {
      statusToUpdate = DocumentStatus.COMPLETED; // Có ảnh -> Xong
    } else if (data.evidenceUrl === '' || data.evidenceUrl === null) {
      statusToUpdate = DocumentStatus.WAITING; // Xóa ảnh -> Chờ
    }

    return await this.prisma.document.update({
      where: { id },
      data: {
        docCode: data.docCode,
        docType: data.docType,
        recipient: data.recipient,
        address: data.address,
        receivedDate: data.receivedDate
          ? new Date(data.receivedDate)
          : undefined,
        dueDate: data.dueDate ? new Date(data.dueDate) : undefined,

        deliveryMethod: data.deliveryMethod,
        evidenceUrl: data.evidenceUrl,
        content: data.content,
        status: statusToUpdate,

        // 👇 MỚI: Cập nhật 7 trường chi phí mới
        distance: data.distance,
        deliveryFee: data.deliveryFee,
        accommodationFee: data.accommodationFee,
        fuelFee: data.fuelFee,
        otherFee: data.otherFee,
        totalFeeInternal: data.totalFeeInternal,
        totalFeeExternal: data.totalFeeExternal,

        responsibleOfficial: data.responsibleOfficialId
          ? { connect: { id: data.responsibleOfficialId } }
          : undefined,
      },
      include: {
        court: true,
        responsibleOfficial: true,
        creator: true,
      },
    });
  }

  // --- 5. XÓA (Delete) ---
  async deleteDocument(id: string) {
    // 👇 MỚI: Chuyển từ Hard Delete sang Soft Delete
    return await this.prisma.document.update({
      where: { id },
      data: { isDeleted: true },
    });
  }

  /**
   * --- HELPER: Map dữ liệu Input -> Schema Database Mới ---
   */
  private sanitizePayload(input: any): Prisma.DocumentUncheckedCreateInput {
    return {
      docCode: input.docCode,
      docType: input.docType,
      recipient: input.recipient,
      address: input.address,
      content: input.content,

      receivedDate: input.receivedDate
        ? new Date(input.receivedDate)
        : new Date(),
      dueDate: input.dueDate
        ? new Date(input.dueDate)
        : input.processDeadline
          ? new Date(input.processDeadline)
          : new Date(),

      // 👇 MỚI: Map 7 trường chi phí mới
      distance: input.distance ?? 0,
      deliveryFee: input.deliveryFee ?? 0,
      accommodationFee: input.accommodationFee ?? 0,
      fuelFee: input.fuelCost ?? input.fuelFee ?? 0,
      otherFee: input.otherCost ?? input.otherFee ?? 0,
      totalFeeInternal: input.totalFeeInternal ?? 0,
      totalFeeExternal: input.totalFeeExternal ?? 0,

      deliveryMethod: input.deliveryMethod,
      evidenceUrl: input.evidenceUrl ?? input.processProof,

      courtId: input.courtId,
      responsibleOfficialId: input.responsibleOfficialId ?? null,
      creatorId: input.creatorId ?? null,
    };
  }

  async findOfficialsByCourtId(courtId: string) {
    return await this.prisma.courtOfficial.findMany({
      where: {
        courtId: courtId,
        isDeleted: false, // Lọc nhân viên đã nghỉ/bị xóa
      },
      orderBy: { name: 'asc' }, // Sắp xếp theo ABC cho dễ tìm
    });
  }

  // --- LẤY DANH SÁCH NHÂN SỰ THEO NHIỀU TÒA ÁN CÙNG LÚC (Dùng cho Import) ---
  async findOfficialsByCourtIds(courtIds: string[]) {
    return await this.prisma.courtOfficial.findMany({
      where: {
        courtId: { in: courtIds },
        isDeleted: false,
      },
      select: { id: true, name: true, courtId: true }, // Chỉ lấy đúng 3 trường cần thiết cho nhẹ RAM
    });
  }
  // --- KIỂM TRA CÁC MÃ ĐÃ TỒN TẠI ---
  async findExistingDocs(codes: string[], courtIds: string[]) {
    return await this.prisma.document.findMany({
      where: {
        docCode: { in: codes },
        courtId: { in: courtIds },
        isDeleted: false,
      },
      select: { docCode: true, courtId: true }, // Chỉ lấy 2 trường này để check cho nhẹ
    });
  }
  // --- LẤY DANH SÁCH CÁN BỘ THEO COURT ID (Cho Public Dropdown) ---
  async getOfficialsForDropdown(courtId: string) {
    return await this.prisma.courtOfficial.findMany({
      where: {
        courtId: courtId,
        isDeleted: false,
      },
      select: {
        id: true,
        name: true,
        title: true, // Nếu DB của ông có trường chức danh, không thì bỏ đi
      },
      orderBy: { name: 'asc' }, // Xếp theo tên ABC cho FE dễ tìm
    });
  }
}
