import { Injectable } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service.js';
import * as graphql from '../graphql.js';
import { Prisma, DocumentStatus } from '@prisma/client';

@Injectable()
export class DocumentRepository {
  constructor(private readonly prisma: PrismaService) {}

  // --- 1. LẤY DANH SÁCH & THỐNG KÊ (Dashboard) ---
  async findDocumentByCourtId(filter: graphql.GetDocsFilterInput) {
    // Fix lỗi null/undefined bằng Nullish Coalescing (??)
    const page = filter.page ?? 1;
    const limit = filter.limit ?? 10;
    const { courtId, year, status, search } = filter;
    const skip = (page - 1) * limit;

    // 1. Tính toán ngày đầu năm - cuối năm
    const startDate = new Date(`${year}-01-01T00:00:00.000Z`);
    const endDate = new Date(`${year}-12-31T23:59:59.999Z`);
    const now = new Date();

    // 2. Xây dựng điều kiện lọc (Where Clause)
    const where: Prisma.DocumentWhereInput = {
      courtId: courtId,
      receivedDate: {
        gte: startDate,
        lte: endDate,
      },
    };

    if (status) {
      where.status = status as DocumentStatus;
    }

    if (search) {
      where.OR = [
        { docCode: { contains: search } },
        { recipient: { contains: search } },
      ];
    }

    // 3. Thực hiện Query song song
    const [total, documents, statsWaiting, statsOverdue] = await Promise.all([
      // Đếm tổng
      this.prisma.document.count({ where }),

      // Lấy dữ liệu
      this.prisma.document.findMany({
        where,
        skip,
        take: limit,
        orderBy: { receivedDate: 'desc' },
        include: {
          court: true,
          // 👇 MỚI: Lấy thông tin người chịu trách nhiệm (Fake Role)
          responsibleOfficial: true,
          // 👇 MỚI: Lấy thông tin người nhập liệu (User thật)
          creator: true,
        },
      }),

      // Đếm Waiting
      this.prisma.document.count({
        where: {
          courtId,
          receivedDate: { gte: startDate, lte: endDate },
          status: DocumentStatus.WAITING,
        },
      }),

      // Đếm Overdue (Quá hạn)
      this.prisma.document.count({
        where: {
          courtId,
          receivedDate: { gte: startDate, lte: endDate },
          status: {
            notIn: [DocumentStatus.COMPLETED, DocumentStatus.CONFIRMED],
          },
          dueDate: { lt: now },
        },
      }),
    ]);

    // 4. Trả về kết quả
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
      where: { id },
      include: {
        court: true,
        // 👇 Sửa include theo schema mới
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

    // Logic: Nếu có ảnh bằng chứng mà chưa set status -> Tự động COMPLETED
    let statusToUpdate = data.status;
    if (data.evidenceUrl && !statusToUpdate) {
      statusToUpdate = DocumentStatus.COMPLETED;
    }

    return await this.prisma.document.update({
      where: { id },
      data: {
        // Map các trường update
        recipient: data.recipient,
        address: data.address,
        dueDate: data.dueDate ? new Date(data.dueDate) : undefined,

        deliveryMethod: data.deliveryMethod,
        evidenceUrl: data.evidenceUrl,
        content: data.content,
        status: statusToUpdate,

        distance: data.distance,
        cost: data.cost,
        fuelCost: data.fuelCost,
        otherCost: data.otherCost,
        totalCost: data.totalCost,

        // Cập nhật quan hệ nếu có thay đổi ID
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
    return await this.prisma.document.delete({
      where: { id },
    });
  }

  /**
   * --- HELPER: Map dữ liệu Input -> Schema Database Mới ---
   */
  private sanitizePayload(input: any): Prisma.DocumentUncheckedCreateInput {
    return {
      // 1. Thông tin chung
      docCode: input.docCode,
      docType: input.docType,
      recipient: input.recipient,
      address: input.address,
      content: input.content, // Schema mới dùng 'content'

      // 2. Ngày tháng
      receivedDate: input.receivedDate
        ? new Date(input.receivedDate)
        : new Date(),
      // Ưu tiên 'dueDate', fallback về 'processDeadline' nếu FE gửi code cũ
      dueDate: input.dueDate
        ? new Date(input.dueDate)
        : input.processDeadline
          ? new Date(input.processDeadline)
          : new Date(),

      // 3. Chi phí (Default = 0)
      distance: input.distance ?? input.travelDistance ?? 0,
      cost: input.cost ?? input.pricePerDocument ?? 0,
      fuelCost: input.fuelCost ?? input.gasFee ?? 0,
      otherCost: input.otherCost ?? input.otherFee ?? 0,
      totalCost: input.totalCost ?? input.outerTotalPrice ?? 0,

      // 4. Kết quả
      deliveryMethod: input.deliveryMethod,
      evidenceUrl: input.evidenceUrl ?? input.processProof,

      // 5. Quan hệ (QUAN TRỌNG NHẤT)
      courtId: input.courtId,

      // 👇 Map ID người chịu trách nhiệm (Fake Role)
      responsibleOfficialId: input.responsibleOfficialId ?? null,

      // 👇 Map ID người tạo (User Token)
      creatorId: input.creatorId ?? null,
    };
  }
}
