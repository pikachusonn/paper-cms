import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AccountRepository } from './account.repository.js';
import * as bcrypt from 'bcrypt';
import { ACCESS_JWT, REFRESH_JWT } from '../utils/jwt.providers.js';
import {
  IChangePasswordInput,
  ICreateAccountServiceInput,
  IResetPasswordInput,
  LoginRequest,
} from '../interface/account.js';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '../mail/mail.service.js';
import { PrismaService } from '../service/prisma.service.js';
@Injectable()
export class AccountService {
  private readonly logger = new Logger(AccountService.name);
  constructor(
    private readonly accountRepository: AccountRepository,
    @Inject(ACCESS_JWT) private readonly accessJwt: JwtService,
    @Inject(REFRESH_JWT) private readonly refreshJwt: JwtService,
    private readonly mailService: MailService,
    private readonly prisma: PrismaService,
  ) {}

  async findAllAccounts() {
    return await this.accountRepository.findAllAccounts();
  }

  async findAccountById(id: string) {
    return await this.accountRepository.findAccountById(id);
  }

  async login(loginRequest: LoginRequest) {
    const { email, password } = loginRequest;
    const account = await this.accountRepository.findAccountByEmail(email);
    if (!account) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordMatch = await bcrypt.compare(password, account.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      sub: account.id,
      email: account.email,
      role: account.role,
    };

    const accessToken = await this.accessJwt.signAsync(payload);
    const refreshToken = await this.refreshJwt.signAsync(payload);
    return {
      accessToken,
      refreshToken,
      account,
    };
  }

  //Hàm tiện ích: Tự sinh mật khẩu ngẫu nhiên (8 ký tự)
  private generateRandomPassword(length: number = 8): string {
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#';
    let retVal = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  async createAccount(input: Omit<ICreateAccountServiceInput, 'password'>) {
    const courtExists = await this.prisma.court.findUnique({
      where: { id: input.courtId },
    });
    if (!courtExists) throw new NotFoundException('Không tìm thấy Tòa án!');
    const exist = await this.accountRepository.findAccountByEmail(input.email);
    if (exist) throw new ConflictException('Email này đã tồn tại!');
    const randomPassword = this.generateRandomPassword(10);
    const hashedPassword = await bcrypt.hash(randomPassword, 10);
    const newAccount = await this.accountRepository.createAccountWithStaff({
      ...input,
      password: hashedPassword,
    });
    try {
      await this.mailService.sendUserCredentials(
        input.email,
        input.name,
        randomPassword,
      );
      this.logger.log(`Đã gửi email thành công cho: ${input.email}`);
    } catch (error) {
      this.logger.error(
        `LỖI GỬI MAIL: Không thể gửi mật khẩu đến ${input.email}`,
      );
      this.logger.warn(
        `Vui lòng thông báo thủ công cho nhân viên. Mật khẩu là: ${randomPassword}`,
      );
      this.logger.error(error.message);
    }

    return newAccount;
  }
  // --- 1. LOGOUT ---
  async logout(userId: string) {
    return true;
  }

  // --- 2. CHANGE PASSWORD (Đổi mật khẩu chủ động) ---
  async changePassword(input: IChangePasswordInput) {
    // a. Lấy user từ DB
    const user = await this.accountRepository.findAccountById(input.userId);
    if (!user) throw new NotFoundException('Tài khoản không tồn tại');

    // b. Check mật khẩu cũ
    const isMatch = await bcrypt.compare(input.oldPassword, user.password);
    if (!isMatch)
      throw new UnauthorizedException('Mật khẩu cũ không chính xác');

    // c. Hash mật khẩu mới và lưu
    const newHash = await bcrypt.hash(input.newPassword, 10);
    await this.accountRepository.updatePassword(user.id, newHash);

    return true;
  }

  // --- 3. FORGOT PASSWORD (Gửi OTP) ---
  async forgotPassword(email: string) {
    // a. Check user tồn tại
    const user = await this.accountRepository.findAccountByEmail(email);
    if (!user)
      throw new NotFoundException('Email không tồn tại trong hệ thống');

    // b. Tạo OTP 6 số ngẫu nhiên
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // c. Set hạn 15 phút (Tính bằng mili giây)
    const expires = new Date(Date.now() + 15 * 60 * 1000);

    // d. Lưu vào DB
    await this.accountRepository.saveResetToken(email, otp, expires);

    // e. Gửi mail (Bọc try catch để không crash)
    try {
      await this.mailService.sendResetPassword(email, otp);
      return true;
    } catch (error) {
      console.error(error);
      return false; // Báo lỗi gửi mail
    }
  }

  // --- 4. RESET PASSWORD (Xác nhận OTP và đổi pass) ---
  async resetPassword(input: IResetPasswordInput) {
    // a. Tìm user có email và OTP khớp, và còn hạn
    const user = await this.accountRepository.findByResetToken(
      input.email,
      input.otp,
    );

    if (!user) {
      throw new BadRequestException('Mã OTP không đúng hoặc đã hết hạn');
    }

    // b. Hash pass mới và cập nhật
    const newHash = await bcrypt.hash(input.newPassword, 10);
    await this.accountRepository.updatePassword(user.id, newHash);

    return true;
  }
}
