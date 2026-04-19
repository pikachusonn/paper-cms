import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../service/prisma.service.js';
import { DocumentStatus, Role } from '@prisma/client';
import { MailerService } from '@nestjs-modules/mailer'; // 👈 Đã mở import

@Injectable()
export class NotificationCronService {
  private readonly logger = new Logger(NotificationCronService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly mailerService: MailerService, // 👈 Đã tiêm MailerService vào
  ) {}

  // @Cron(CronExpression.EVERY_10_SECONDS) // 👈 Bật dòng này lên nếu muốn TEST thử ngay lập tức
  // @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT) // Chạy thật vào 00:00 mỗi đêm
  @Cron('0 0,12 * * *')
  async handleUrgentDocuments() {
    this.logger.log('Bắt đầu quét các văn bản sắp hết hạn...');

    // 1. Khoanh vùng thời gian "Ngày Mai"
    const now = new Date();
    const tomorrowStart = new Date(now);
    tomorrowStart.setDate(tomorrowStart.getDate() + 1);
    tomorrowStart.setHours(0, 0, 0, 0);

    const tomorrowEnd = new Date(tomorrowStart);
    tomorrowEnd.setHours(23, 59, 59, 999);

    // 2. Query giấy tờ Đợi tống đạt & Hạn chót = Ngày mai
    const urgentDocs = await this.prisma.document.findMany({
      where: {
        isDeleted: false,
        status: DocumentStatus.WAITING,
        dueDate: {
          gte: tomorrowStart,
          lte: tomorrowEnd,
        },
      },
      include: { court: true },
    });

    if (urgentDocs.length === 0) {
      this.logger.log('Không có văn bản nào sắp hết hạn ngày mai.');
      return;
    }

    // 3. Lấy danh sách toàn bộ Admin
    const admins = await this.prisma.account.findMany({
      where: { role: Role.ADMIN, isDeleted: false },
    });

    if (admins.length === 0) return;

    // 4. Bắn thông báo In-app (Lưu vào DB cho quả chuông)
    const notificationsData: any[] = [];
    for (const admin of admins) {
      for (const doc of urgentDocs) {
        notificationsData.push({
          title: 'Giấy tờ sắp hết hạn',
          content: `Giấy tờ số ${doc.docCode} của ${doc.court.name} còn 1 ngày nữa là đến hạn tống đạt.`,
          type: 'URGENT',
          accountId: admin.id,
        });
      }
    }

    await this.prisma.notification.createMany({
      data: notificationsData,
    });

    // 5. GỬI EMAIL THẬT
    const adminEmails = admins.map((admin) => admin.email);

    // Tạo list HTML cho nội dung Email
    const listHtml = urgentDocs
      .map((d) => `<li><b>${d.docCode}</b> - Tòa: ${d.court.name}</li>`)
      .join('');

    try {
      await this.mailerService.sendMail({
        to: ['tongdatvbpt@gmail.com'], // Gửi cho mảng list email
        subject: `[Hệ thống Tống đạt] Có ${urgentDocs.length} giấy tờ cần xử lý gấp ngày mai!`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h3 style="color: #d9534f;">⚠️ Xin chào Quản trị viên,</h3>
            <p>Hệ thống ghi nhận có <b>${urgentDocs.length}</b> giấy tờ tống đạt sẽ <b>hết hạn vào ngày mai</b>.</p>
            <p>Dưới đây là danh sách chi tiết:</p>
            <ul style="background: #f9f9f9; padding: 15px 30px; border-radius: 5px;">
              ${listHtml}
            </ul>
            <p>Vui lòng đăng nhập vào hệ thống để đôn đốc nhân viên nhập liệu/thư ký xử lý kịp thời.</p>
            <br/>
            <p><i>Trân trọng,<br/>Hệ thống Quản lý Giấy tờ Tống đạt</i></p>
          </div>
        `,
      });
      this.logger.log(
        `✅ Đã tạo ${notificationsData.length} thông báo chuông và gửi Email thành công tới ${adminEmails.length} Admin!`,
      );
    } catch (error) {
      this.logger.error('❌ Lỗi khi gửi email thông báo:', error);
    }
  }
}
