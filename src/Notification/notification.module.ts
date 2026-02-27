import { Module } from '@nestjs/common';
import { NotificationResolver } from './notification.resolver.js';
import { NotificationService } from './notification.service.js';
import { NotificationRepository } from './notification.repository.js';
import { PrismaService } from '../service/prisma.service.js'; // Nhớ check lại đường dẫn tới Prisma nhé

@Module({
  providers: [
    NotificationResolver,
    NotificationService,
    NotificationRepository,
    PrismaService, // Tiêm Prisma vào để Repo gọi Database
  ],
  exports: [NotificationService], // Mở cửa để sau này module khác (như Cronjob) có thể dùng ké
})
export class NotificationModule {}
