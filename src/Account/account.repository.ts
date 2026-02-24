import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service.js';
import { ICreateAccountRepositoryInput } from 'src/interface/account.js';

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

  async createAccountWithStaff(data: ICreateAccountRepositoryInput) {
    const courtExists = await this.prisma.court.findUnique({
      where: { id: data.courtId },
    });

    if (!courtExists) {
      throw new NotFoundException('Không tìm thấy Tòa án với ID này!');
    }
    return await this.prisma.account.create({
      data: {
        email: data.email,
        password: data.password, // Pass đã hash
        role: data.role,

        courtStaff: {
          create: {
            name: data.name,
            phone: data.phone,
            court: {
              connect: { id: data.courtId },
            },
          },
        },
      },
      include: {
        courtStaff: true,
      },
    });
  }
  async saveResetToken(email: string, token: string, expires: Date) {
    return await this.prisma.account.update({
      where: { email },
      data: {
        resetPasswordToken: token,
        resetPasswordExpires: expires,
      },
    });
  }

  // Tìm user bằng mã OTP còn hạn
  async findByResetToken(email: string, token: string) {
    return await this.prisma.account.findFirst({
      where: {
        email: email,
        resetPasswordToken: token,
        resetPasswordExpires: { gt: new Date() }, // Expires > Hiện tại
      },
    });
  }

  // Cập nhật mật khẩu mới (Reset xong thì xóa luôn token)
  async updatePassword(id: string, newPasswordHash: string) {
    return await this.prisma.account.update({
      where: { id },
      data: {
        password: newPasswordHash,
        resetPasswordToken: null, // Xóa token dùng rồi
        resetPasswordExpires: null,
      },
    });
  }
}
