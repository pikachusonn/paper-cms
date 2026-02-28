import { Injectable } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service.js';
import {
  IAccountFilterInput,
  ICreateAccountRepositoryInput,
  IUpdateAccountInput,
  IUpdateProfileInput,
} from '../interface/account.js';
import { Prisma } from '@prisma/client';
import { Role } from '@prisma/client';

@Injectable()
export class AccountRepository {
  constructor(private readonly prisma: PrismaService) {}

  // --- 1. CÁC HÀM TÌM KIẾM CƠ BẢN ---

  async findAllAccounts() {
    return await this.prisma.account.findMany();
  }

  async findAccountById(id: string) {
    return await this.prisma.account.findUnique({
      where: { id },
    });
  }

  async findAccountByEmail(email: string) {
    return await this.prisma.account.findUnique({
      where: { email },
    });
  }

  // --- 2. TẠO TÀI KHOẢN (LOGIC MỚI) ---

  async createAccount(data: ICreateAccountRepositoryInput) {
    // Check email tồn tại (Có thể check ở Service rồi nhưng check lại cho chắc)
    const existingUser = await this.prisma.account.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new Error('Email này đã được sử dụng!');
    }

    // Tạo Account trực tiếp (Mapping name -> fullName)
    return await this.prisma.account.create({
      data: {
        email: data.email,
        password: data.password,
        fullName: data.name, // Map từ input.name sang db.fullName
        phone: data.phone,
        role: data.role || 'STAFF',
        avatar: data.avatar,
      },
    });
  }

  // --- 3. QUÊN MẬT KHẨU (RESET PASSWORD) ---

  async saveResetToken(email: string, token: string, expires: Date) {
    return await this.prisma.account.update({
      where: { email },
      data: {
        resetPasswordToken: token,
        resetPasswordExpires: expires,
      },
    });
  }

  async findByResetToken(email: string, token: string) {
    return await this.prisma.account.findFirst({
      where: {
        email: email,
        resetPasswordToken: token,
        resetPasswordExpires: { gt: new Date() }, // Còn hạn
      },
    });
  }

  async updatePassword(id: string, newPasswordHash: string) {
    return await this.prisma.account.update({
      where: { id },
      data: {
        password: newPasswordHash,
        resetPasswordToken: null,
        resetPasswordExpires: null,
      },
    });
  }

  // --- 4. LẤY DANH SÁCH (FILTER & PAGINATION) ---

  async findAll(filter: IAccountFilterInput) {
    // Xử lý default value cho page/limit bằng Nullish Coalescing (??)
    const page = filter.page ?? 1;
    const limit = filter.limit ?? 10;
    const { search, role } = filter;
    const skip = (page - 1) * limit;

    // Xây dựng điều kiện lọc
    const whereCondition: Prisma.AccountWhereInput = {
      AND: [],
    };

    const andConditions = whereCondition.AND as Prisma.AccountWhereInput[];

    // Lọc theo Role
    if (role) {
      andConditions.push({ role: role });
    }

    // Tìm kiếm (Search) theo Email HOẶC Tên (fullName)
    if (search) {
      andConditions.push({
        OR: [
          { email: { contains: search } },
          { fullName: { contains: search } }, // Tìm trực tiếp trên bảng Account
        ],
      });
    }

    // Query song song: Đếm tổng + Lấy dữ liệu
    const [total, data] = await Promise.all([
      this.prisma.account.count({ where: whereCondition }),
      this.prisma.account.findMany({
        where: whereCondition,
        take: limit,
        skip: skip,
        orderBy: { createdAt: 'desc' }, // Mới nhất lên đầu
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

  // --- 5. CẬP NHẬT (UPDATE) ---

  async updateAccount(data: IUpdateAccountInput) {
    const { id, name, phone, avatar } = data;

    return await this.prisma.account.update({
      where: { id },
      data: {
        // Chỉ update các trường có gửi lên
        fullName: name, // Map name -> fullName
        phone: phone,
        avatar: avatar,
      },
    });
  }

  // --- 6. XÓA TÀI KHOẢN (DELETE) ---

  async deleteAccount(id: string) {
    return await this.prisma.account.update({
      where: { id },
      data: { isDeleted: true },
    });
  }

  async findStaffAccounts(search?: string) {
    return await this.prisma.account.findMany({
      where: {
        role: Role.STAFF, // Chỉ lấy nhân viên
        // isDeleted: false, // Loại bỏ tài khoản đã xóa
        OR: search
          ? [
              { fullName: { contains: search } },
              { email: { contains: search } },
            ]
          : undefined,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findAdminAccounts(search?: string) {
    return await this.prisma.account.findMany({
      where: {
        role: Role.ADMIN, // Chỉ lấy admin
        // isDeleted: false, // Loại bỏ tài khoản đã xóa
        OR: search
          ? [
              { fullName: { contains: search } },
              { email: { contains: search } },
            ]
          : undefined,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateProfile(id: string, data: IUpdateProfileInput) {
    return await this.prisma.account.update({
      where: { id },
      data: {
        fullName: data.fullName,
        phone: data.phone,
        avatar: data.avatar,
      },
    });
  }
}
