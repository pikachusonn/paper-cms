import { Injectable } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service.js';
import * as graphql from '../graphql.js';
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
          ...(documentFilter.deadlineStart
            ? [
                {
                  processDeadline: { gte: documentFilter.deadlineStart },
                },
              ]
            : []),

          ...(documentFilter.deadlineEnd
            ? [
                {
                  processDeadline: { lte: documentFilter.deadlineEnd },
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
        ].filter(Boolean),
      },
      orderBy: {
        processDeadline: documentFilter?.sort || 'desc',
      },
      include: {
        court: true,
      },
    });
  }

  async findDocumentById(id: string) {
    return await this.prisma.document.findUnique({
      where: {
        id,
      },
    });
  }

  async createSingleDocument(documentPayload: DocumentCreateInput) {
    return await this.prisma.document.create({
      data: documentPayload,
    });
  }

  async createMultiDocument(documentPayload: DocumentCreateManyInput[]) {
    return await this.prisma.document.createMany({
      data: documentPayload,
    });
  }
}
