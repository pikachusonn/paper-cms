import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserCredentials(email: string, name: string, pass: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Thông tin đăng nhập hệ thống Paper CMS',
      template: './welcome',
      context: {
        name: name,
        email: email,
        password: pass,
        loginUrl: 'http://localhost:3000/login',
      },
    });
  }
  async sendResetPassword(email: string, otp: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Mã xác nhận đặt lại mật khẩu - Paper CMS',
      template: './reset-password',
      context: {
        name: email,
        otp: otp,
      },
    });
  }
}
