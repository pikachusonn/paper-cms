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
  IAccountFilterInput,
  IChangePasswordInput,
  ICreateAccountServiceInput, // Import cái này từ interface/account.ts
  IResetPasswordInput,
  IUpdateAccountInput,
  IUpdateProfileInput,
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

  // --- 1. FIND & LOGIN ---

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

  // --- 2. CREATE ACCOUNT (LOGIC MỚI) ---

  // Hàm helper sinh pass ngẫu nhiên
  private generateRandomPassword(length: number = 10): string {
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#';
    let retVal = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  async createAccount(input: ICreateAccountServiceInput) {
    // Check email tồn tại
    const exist = await this.accountRepository.findAccountByEmail(input.email);
    if (exist) throw new ConflictException('Email này đã tồn tại!');

    // Sinh mật khẩu & Hash
    const randomPassword = this.generateRandomPassword(10);
    const hashedPassword = await bcrypt.hash(randomPassword, 10);

    // Tạo Account mới (Không còn courtId)
    const newAccount = await this.accountRepository.createAccount({
      email: input.email,
      password: hashedPassword,
      name: input.name, // Mapping sang fullName
      phone: input.phone,
      role: input.role,
      avatar: input.avatar,
    });

    // Gửi email thông báo
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
      this.logger.warn(`Mật khẩu là: ${randomPassword}`);
      this.logger.error(error.message);
    }

    return newAccount;
  }

  // --- 3. LOGOUT ---
  async logout(userId: string) {
    return true; // Có thể implement blacklist token nếu cần
  }

  // --- 4. CHANGE PASSWORD ---
  async changePassword(input: IChangePasswordInput) {
    const user = await this.accountRepository.findAccountById(input.userId);
    if (!user) throw new NotFoundException('Tài khoản không tồn tại');

    const isMatch = await bcrypt.compare(input.oldPassword, user.password);
    if (!isMatch)
      throw new UnauthorizedException('Mật khẩu cũ không chính xác');

    const newHash = await bcrypt.hash(input.newPassword, 10);
    await this.accountRepository.updatePassword(user.id, newHash);

    return true;
  }

  // --- 5. FORGOT PASSWORD ---
  async forgotPassword(email: string) {
    const user = await this.accountRepository.findAccountByEmail(email);
    if (!user)
      throw new NotFoundException('Email không tồn tại trong hệ thống');

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = new Date(Date.now() + 15 * 60 * 1000); // 15 phút

    await this.accountRepository.saveResetToken(email, otp, expires);

    try {
      await this.mailService.sendResetPassword(email, otp);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async resetPassword(input: IResetPasswordInput) {
    // Tìm user bằng Token/OTP còn hạn
    const user = await this.accountRepository.findByResetToken(
      input.email,
      input.otp, // Ở đây token chính là OTP
    );

    if (!user) {
      throw new BadRequestException('Mã OTP không đúng hoặc đã hết hạn');
    }

    // Hash pass mới và cập nhật
    const newHash = await bcrypt.hash(input.newPassword, 10);
    await this.accountRepository.updatePassword(user.id, newHash);

    return true;
  }

  // --- 6. MANAGEMENT (List, Update, Delete) ---

  async getAllAccounts(filter: IAccountFilterInput) {
    return await this.accountRepository.findAll(filter);
  }

  async updateAccount(input: IUpdateAccountInput) {
    // Có thể check xem user tồn tại không trước khi update nếu kỹ
    return await this.accountRepository.updateAccount(input);
  }

  async deleteAccount(id: string) {
    const account = await this.accountRepository.findAccountById(id);
    if (!account || account.isDeleted) {
      throw new NotFoundException('Tài khoản không tồn tại hoặc đã bị xóa');
    }
    return await this.accountRepository.deleteAccount(id);
  }

  async getStaffAccounts(search?: string) {
    return await this.accountRepository.findStaffAccounts(search);
  }

  async updateProfile(id: string, input: IUpdateProfileInput) {
    // Tùy chọn: Check xem user có tồn tại không
    const account = await this.accountRepository.findAccountById(id); // Giả sử bạn có hàm findById
    if (!account || account.isDeleted) {
      throw new NotFoundException('Tài khoản không tồn tại hoặc đã bị xóa');
    }

    return await this.accountRepository.updateProfile(id, input);
  }

  async getAllAdmins(search?: string) {
    return await this.accountRepository.findAdminAccounts(search);
  }
}
