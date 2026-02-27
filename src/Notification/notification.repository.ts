import { Injectable } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service.js';
import { Prisma } from '@prisma/client';

@Injectable()
export class NotificationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findMyNotifications(accountId: string, filter: any) {
    const page = filter.page ?? 1;
    const limit = filter.limit ?? 10;
    const skip = (page - 1) * limit;

    const where: Prisma.NotificationWhereInput = {
      accountId: accountId,
    };

    // Nếu FE truyền isRead (true/false) thì lọc theo tab, không truyền thì lấy tất cả
    if (filter.isRead !== undefined && filter.isRead !== null) {
      where.isRead = filter.isRead;
    }

    const [total, notifications, unreadCount] = await Promise.all([
      this.prisma.notification.count({ where }),
      this.prisma.notification.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' }, // Mới nhất lên đầu
      }),
      this.prisma.notification.count({
        where: { accountId, isRead: false },
      }),
    ]);

    return {
      data: notifications,
      total,
      unreadCount, // FE dùng số này để làm cái badge (số 9 màu đỏ ở góc ảnh)
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async markAsRead(id: string) {
    return await this.prisma.notification.update({
      where: { id },
      data: { isRead: true },
    });
  }

  async markAllAsRead(accountId: string) {
    return await this.prisma.notification.updateMany({
      where: { accountId, isRead: false },
      data: { isRead: true },
    });
  }

  async findById(id: string) {
    return await this.prisma.notification.findUnique({
      where: { id },
    });
  }
}
