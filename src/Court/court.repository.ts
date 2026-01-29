import { Injectable } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service.js';
import { CourtFilter } from '../graphql.js';

@Injectable()
export class CourtRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(courtFilter: CourtFilter) {
    const courts = await this.prisma.court.findMany({
      where: {
        isDeleted: false,
      },
      include: {
        staff: true,
        document: {
          where: {
            AND: [
              courtFilter.startDate && {
                receivedDate: { gte: courtFilter.startDate },
              },
              courtFilter.endDate && {
                receivedDate: { lte: courtFilter.endDate },
              },
              courtFilter.documentStatus && {
                processStatus: courtFilter.documentStatus,
              },
            ].filter(Boolean),
          },
        },
        documentList: true,
      },
    });
    return courts;
  }
}
