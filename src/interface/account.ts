import { Role } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export interface LoginRequest {
  email: string;
  password: string;
}

export interface ICreateAccountServiceInput {
  email: string;
  role: Role;
  name: string;
  phone?: string;
  courtId: string;
}

export interface ICreateAccountRepositoryInput extends ICreateAccountServiceInput {
  password: string;
}

export class IChangePasswordInput {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  oldPassword: string;

  @IsString()
  @IsNotEmpty()
  newPassword: string;
}

// --- Interface cho Đặt lại mật khẩu (Quên mật khẩu) ---
export class IResetPasswordInput {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  otp: string;

  @IsString()
  @IsNotEmpty()
  newPassword: string;
}
