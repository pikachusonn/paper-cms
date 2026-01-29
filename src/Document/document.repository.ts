import { Injectable } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service.js';

@Injectable()
export class DocumentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findDocumentByCourtId(courtId: string) {
    return await this.prisma.document.findMany({
      where: {
        courtId: courtId,
      },
      orderBy: {
        processDeadline: 'desc',
      },
      include: {
        court: true,
      },
    });
  }
}
