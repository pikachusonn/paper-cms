import { Injectable } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service.js';

@Injectable()
export class AccountRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAllAccounts() {
    return await this.prisma.account.findMany();
  }

  async findAccountById(id: string) {
    return await this.prisma.account.findUnique({
      where: {
        id,
      },
    });
  }

  async findAccountByEmail(email: string) {
    return await this.prisma.account.findUnique({
      where: {
        email,
      },
    });
  }
}
