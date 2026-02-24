import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service.js';
import {
  IAccountFilterInput,
  ICreateAccountRepositoryInput,
  IUpdateAccountInput,
} from 'src/interface/account.js';
import { Prisma } from '@prisma/client';

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
  // --- 1. LẤY DANH SÁCH (FILTER & PAGINATION) ---
  async findAll(filter: IAccountFilterInput) {
    const { page = 1, limit = 10, search, role, courtId } = filter;
    const skip = (page - 1) * limit;

    // Xây dựng điều kiện lọc (Where Clause)
    const whereCondition: Prisma.AccountWhereInput = {
      // Mặc định không lấy những người đã bị xóa (nếu logic account có isDeleted, hiện tại schema account chưa có isDeleted nên ta check staff)
      courtStaff: {
        isDeleted: false,
      },
      AND: [], // Chuẩn bị mảng điều kiện
    };

    const andConditions = whereCondition.AND as Prisma.AccountWhereInput[];

    // Lọc theo Role
    if (role) {
      andConditions.push({ role: role });
    }

    // Lọc theo Tòa án
    if (courtId) {
      andConditions.push({ courtStaff: { courtId: courtId } });
    }

    // Tìm kiếm (Search) theo Email HOẶC Tên nhân viên
    if (search) {
      andConditions.push({
        OR: [
          { email: { contains: search } }, // Tìm theo email (MySQL mặc định case-insensitive)
          { courtStaff: { name: { contains: search } } }, // Tìm theo tên
        ],
      });
    }

    // Thực hiện 2 lệnh song song: Đếm tổng + Lấy dữ liệu
    const [total, data] = await Promise.all([
      this.prisma.account.count({ where: whereCondition }),
      this.prisma.account.findMany({
        where: whereCondition,
        take: limit,
        skip: skip,
        orderBy: { createdAt: 'desc' }, // Người mới nhất lên đầu
        include: { courtStaff: true }, // Lấy kèm thông tin nhân viên
      }),
    ]);

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  // --- 2. CẬP NHẬT (UPDATE) ---
  async updateAccount(data: IUpdateAccountInput) {
    const { id, name, phone, courtId, avatar, ...accountData } = data;

    return await this.prisma.account.update({
      where: { id },
      data: {
        ...accountData, // Update role, email...
        courtStaff: {
          update: {
            name: name,
            phone: phone,
            avatar: avatar,
            // Nếu có đổi tòa án thì connect lại
            court: courtId ? { connect: { id: courtId } } : undefined,
          },
        },
      },
      include: { courtStaff: true },
    });
  }

  // XÓA MỀM (SOFT DELETE)
  async softDelete(id: string) {
    // Tìm Staff ID từ Account ID
    const account = await this.prisma.account.findUnique({
      where: { id },
      include: { courtStaff: true },
    });

    if (account && account.courtStaff) {
      await this.prisma.courtStaff.update({
        where: { id: account.courtStaff.id },
        data: { isDeleted: true },
      });
      // Có thể disable luôn account bằng cách đổi role hoặc thêm field isActive
      return true;
    }
    return false;
  }
}
