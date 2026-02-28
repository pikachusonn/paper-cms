import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { NotificationRepository } from './notification.repository.js';

@Injectable()
export class NotificationService {
  constructor(private readonly notificationRepo: NotificationRepository) {}

  async getMyNotifications(accountId: string, filter: any) {
    return await this.notificationRepo.findMyNotifications(accountId, filter);
  }

  async markAsRead(id: string, accountId: string) {
    const notification = await this.notificationRepo.findById(id);
    if (!notification) {
      throw new NotFoundException('Không tìm thấy thông báo');
    }

    // Bảo mật: Đảm bảo user chỉ được đánh dấu thông báo CỦA CHÍNH HỌ
    if (notification.accountId !== accountId) {
      throw new ForbiddenException(
        'Bạn không có quyền thao tác trên thông báo này',
      );
    }

    return await this.notificationRepo.markAsRead(id);
  }

  async markAllAsRead(accountId: string) {
    await this.notificationRepo.markAllAsRead(accountId);
    return true;
  }
}
