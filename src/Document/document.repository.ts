import { Injectable } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service.js';
import * as graphql from '../graphql.js';
import { Prisma } from '@prisma/client'; // Import thêm để ép kiểu chính xác cho Prisma
import {
  DocumentCreateInput,
  DocumentCreateManyInput,
} from '../generated/prisma/models.js';

@Injectable()
export class DocumentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findDocumentByCourtId(documentFilter: graphql.DocumentFilter) {
    return await this.prisma.document.findMany({
      where: {
        AND: [
          { courtId: documentFilter.courtId },
          // Convert String -> Date cho bộ lọc
          ...(documentFilter.deadlineStart
            ? [
                {
                  processDeadline: {
                    gte: new Date(documentFilter.deadlineStart),
                  },
                },
              ]
            : []),

          ...(documentFilter.deadlineEnd
            ? [
                {
                  processDeadline: {
                    lte: new Date(documentFilter.deadlineEnd),
                  },
                },
              ]
            : []),

          ...(documentFilter.documentStatus
            ? [
                {
                  processStatus: documentFilter.documentStatus,
                },
              ]
            : []),
        ].filter(Boolean) as Prisma.DocumentWhereInput[], // Ép kiểu để tránh lỗi mảng rỗng
      },
      orderBy: {
        processDeadline: documentFilter?.sort || 'desc',
      },
      include: {
        court: true,
        // courtStaff: true, // Bỏ comment nếu cần lấy thông tin nhân viên
      },
    });
  }

  async findDocumentById(id: string) {
    return await this.prisma.document.findUnique({
      where: {
        id,
      },
      include: {
        court: true,
        courtStaff: true,
      },
    });
  }

  async createSingleDocument(documentPayload: DocumentCreateInput) {
    // Làm sạch dữ liệu trước khi gọi Prisma
    const cleanData = this.sanitizePayload(documentPayload);

    return await this.prisma.document.create({
      data: cleanData,
    });
  }

  async createMultiDocument(documentPayload: DocumentCreateManyInput[]) {
    // Làm sạch từng phần tử trong mảng
    const cleanDataList = documentPayload.map((item) =>
      this.sanitizePayload(item),
    );

    return await this.prisma.document.createMany({
      data: cleanDataList,
    });
  }

  /**
   * Hàm helper: Chuyển đổi dữ liệu từ GraphQL Input (có thể null)
   * sang Prisma Input (cần undefined hoặc giá trị cụ thể)
   */
  private sanitizePayload(input: any): Prisma.DocumentUncheckedCreateInput {
    return {
      ...input,
      // Xử lý các trường số: Nếu null hoặc undefined -> gán bằng 0
      travelDistance: input.travelDistance ?? 0,
      gasFee: input.gasFee ?? 0,
      hazardousRoadFee: input.hazardousRoadFee ?? 0,
      otherFee: input.otherFee ?? 0,
      pricePerDocument: input.pricePerDocument ?? 0,
      innerTotalPrice: input.innerTotalPrice ?? 0,
      outerTotalPrice: input.outerTotalPrice ?? 0,

      // Xử lý ngày tháng: Convert String -> Date Object
      receivedDate: input.receivedDate
        ? new Date(input.receivedDate)
        : undefined, // Prisma sẽ tự lấy @default(now()) nếu undefined
      processDeadline: input.processDeadline
        ? new Date(input.processDeadline)
        : null,
      // Đảm bảo các trường quan hệ (nếu dùng UncheckedInput thì giữ nguyên ID string)
      courtId: input.courtId,
      courtStaffId: input.courtStaffId ?? null,
    };
  }
}
