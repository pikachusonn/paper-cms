import { Injectable } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service.js';
import * as graphql from '../graphql.js';
import { Prisma } from '@prisma/client';

@Injectable()
export class CourtRepository {
  constructor(private readonly prisma: PrismaService) {}

  // --- 1. QUERY CƠ BẢN ---

  async findAll() {
    return await this.prisma.court.findMany({
      where: { isDeleted: false },
      include: {
        officials: true, // Lấy kèm danh sách nhân sự để hiển thị dropdown
      },
    });
  }

  async findById(id: string) {
    return await this.prisma.court.findUnique({
      where: { id },
      include: {
        officials: true,
      },
    });
  }

  // --- 2. TẠO DỮ LIỆU (Tòa & Nhân sự) ---

  async createCourt(input: graphql.CreateCourtInput) {
    //graphql.CreateCourtInput
    return await this.prisma.court.create({
      data: {
        name: input.name,
        address: input.address,
        courtNumber: input.courtNumber ?? 0,
        phone: input.phone,
        email: input.email,
      },
    });
  }

  async createCourtOfficial(input: graphql.CreateOfficialInput) {
    //graphql.CreateOfficialInput
    // Check tòa tồn tại
    const courtExists = await this.prisma.court.findUnique({
      where: { id: input.courtId },
    });
    if (!courtExists) {
      throw new Error('Không tìm thấy Tòa án với ID này');
    }

    return await this.prisma.courtOfficial.create({
      data: {
        courtId: input.courtId,
        name: input.name,
        title: input.title,
        phone: input.phone,
      },
    });
  }

  // --- 3. THỐNG KÊ DASHBOARD (Logic Mới) ---

  async getDashboardStats(year: number, searchCourt?: string) {
    // 1. Xác định thời gian
    const startDate = new Date(`${year}-01-01T00:00:00.000Z`);
    const endDate = new Date(`${year}-12-31T23:59:59.999Z`);
    const now = new Date();

    // 2. Lấy danh sách tòa
    const whereCourt: Prisma.CourtWhereInput = { isDeleted: false };
    if (searchCourt) {
      whereCourt.name = { contains: searchCourt };
    }

    // Lấy danh sách tòa án
    const courts = await this.prisma.court.findMany({
      where: whereCourt,
    });

    // 3. Tính toán số liệu cho từng tòa
    const formattedCourts = await Promise.all(
      courts.map(async (court) => {
        // 👇 SỬA LẠI: Đếm số Đợi tống đạt (Chưa tống đạt VÀ VẪN CÒN HẠN)
        const waitingCount = await this.prisma.document.count({
          where: {
            courtId: court.id,
            isDeleted: false, // 👈 Bổ sung check xóa mềm
            receivedDate: { gte: startDate, lte: endDate },
            status: 'WAITING',
            dueDate: { gte: now }, // 👈 CHỐT CHẶN: Hạn phải lớn hơn hoặc bằng hiện tại
          },
        });

        // 👇 SỬA LẠI: Đếm số Quá hạn (Chưa xong VÀ ĐÃ QUÁ HẠN)
        const overdueCount = await this.prisma.document.count({
          where: {
            courtId: court.id,
            isDeleted: false, // 👈 Bổ sung check xóa mềm
            receivedDate: { gte: startDate, lte: endDate },
            status: { notIn: ['COMPLETED', 'CONFIRMED'] },
            dueDate: { lt: now },
          },
        });

        return {
          id: court.id,
          name: court.name,
          address: court.address,
          waitingCount,
          overdueCount,
        };
      }),
    );

    // 4. Cộng dồn tổng số liệu Header
    const totalWaiting = formattedCourts.reduce(
      (acc, c) => acc + c.waitingCount,
      0,
    );
    const totalOverdue = formattedCourts.reduce(
      (acc, c) => acc + c.overdueCount,
      0,
    );

    // Đếm nhân viên nhập liệu (Account Role STAFF)
    const totalStaff = await this.prisma.account.count({
      where: { role: 'STAFF' },
    });

    // Đếm thư ký tòa án (Bảng CourtOfficial) - Sửa logic cũ đếm Admin
    const totalSecretary = await this.prisma.courtOfficial.count({
      where: { isDeleted: false },
    });

    return {
      totalWaiting,
      totalOverdue,
      totalStaff,
      totalSecretary,
      courts: formattedCourts,
    };
  }

  async findOfficialById(id: string) {
    return await this.prisma.courtOfficial.findUnique({
      where: { id },
    });
  }

  // 2. Cập nhật nhân sự
  async updateCourtOfficial(id: string, data: any) {
    return await this.prisma.courtOfficial.update({
      where: { id },
      data: {
        name: data.name,
        title: data.title,
        phone: data.phone,
      },
    });
  }

  // 3. Xóa nhân sự (Soft Delete)
  async deleteCourtOfficial(id: string) {
    return await this.prisma.courtOfficial.update({
      where: { id },
      data: { isDeleted: true }, // 👈 Chỉ ẩn đi chứ không xóa mất
    });
  }
}
