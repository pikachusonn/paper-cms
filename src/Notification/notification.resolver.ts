import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { NotificationService } from './notification.service.js';
import { JwtAuthGuard } from '../guard/jwtAuth.guard.js';
import { CurrentUser } from '../decorator/current-user.decorator.js';

@Resolver('Notification')
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @Query('getMyNotifications')
  @UseGuards(JwtAuthGuard)
  async getMyNotifications(
    @Args('filter') filter: any,
    @CurrentUser() user: any,
  ) {
    // Chỉ lấy thông báo của user đang đăng nhập
    return await this.notificationService.getMyNotifications(user.userId, filter);
  }

  @Mutation('markNotificationAsRead')
  @UseGuards(JwtAuthGuard)
  async markNotificationAsRead(
    @Args('id') id: string,
    @CurrentUser() user: any,
  ) {
    return await this.notificationService.markAsRead(id, user.userId);
  }

  @Mutation('markAllNotificationsAsRead')
  @UseGuards(JwtAuthGuard)
  async markAllNotificationsAsRead(@CurrentUser() user: any) {
    return await this.notificationService.markAllAsRead(user.userId);
  }
}
