import { Injectable } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service.js';
@Injectable()
export class CourtStaffRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    return await this.prisma.courtOfficial.findUnique({
      where: { isDeleted: false, id },
      include: {
        court: true,
      },
    });
  }
}
