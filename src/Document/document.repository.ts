import { Injectable } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service.js';
import * as graphql from '../graphql.js';
import { Prisma, DocumentStatus } from '@prisma/client';
@Injectable()
export class DocumentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findDocumentByCourtId(filter: graphql.GetDocsFilterInput) {
    const page = filter.page ?? 1;
    const limit = filter.limit ?? 10;
    const { courtId, year, status, search } = filter;
    const skip = (page - 1) * limit;
    // 1. Tính toán ngày đầu năm - cuối năm
    const startDate = new Date(`${year}-01-01T00:00:00.000Z`);
    const endDate = new Date(`${year}-12-31T23:59:59.999Z`);
    const now = new Date();
    // 2. Xây dựng điều kiện lọc
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

    // 3. Thực hiện Query
    const [total, documents, statsWaiting, statsOverdue] = await Promise.all([
      this.prisma.document.count({ where }),

      this.prisma.document.findMany({
        where,
        skip,
        take: limit,
        orderBy: { receivedDate: 'desc' },
        include: {
          court: true,
          courtStaff: true,
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

      // Đếm Overdue
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

    // 4. Trả về
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

  async findDocumentById(id: string) {
    return await this.prisma.document.findUnique({
      where: { id },
      include: {
        court: true,
        courtStaff: true,
      },
    });
  }

  async createSingleDocument(documentPayload: any) {
    // Làm sạch dữ liệu
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

  /**
   * Hàm helper: Map dữ liệu từ Input cũ sang Schema Mới
   */
  private sanitizePayload(input: any): Prisma.DocumentUncheckedCreateInput {
    return {
      // --- Map các trường cơ bản ---
      docCode: input.docCode, // Mã văn bản
      docType: input.docType, // Trích yếu
      recipient: input.recipient,
      address: input.address,
      content: input.content || input.note, // Map note cũ sang content mới

      // --- Map Ngày tháng ---
      receivedDate: input.receivedDate
        ? new Date(input.receivedDate)
        : new Date(),

      dueDate: input.processDeadline
        ? new Date(input.processDeadline) // Map input cũ -> field mới
        : new Date(input.dueDate), // Hoặc lấy trực tiếp nếu input đã sửa

      // --- Map Chi phí (Đổi tên field cho khớp Schema mới) ---
      distance: input.travelDistance ?? 0, // travelDistance -> distance
      fuelCost: input.gasFee ?? 0, // gasFee -> fuelCost
      cost: input.pricePerDocument ?? 0, // pricePerDocument -> cost
      otherCost: input.otherFee ?? 0, // otherFee -> otherCost
      totalCost: input.outerTotalPrice ?? 0, // outerTotalPrice -> totalCost (Tạm tính)

      // --- Map Relations ---
      courtId: input.courtId,
      courtStaffId: input.courtStaffId ?? null,

      // --- Các trường khác ---
      responsiblePerson: input.responsiblePerson,
      deliveryMethod: input.deliveryMethod,
      evidenceUrl: input.processProof, // processProof -> evidenceUrl
    };
  }
}
