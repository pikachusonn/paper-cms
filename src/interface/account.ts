import { Role } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
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

export class IAccountFilterInput {
  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  limit?: number;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @IsOptional()
  @IsString()
  courtId?: string;
}

// 2. Update Input
export class IUpdateAccountInput {
  @IsString()
  id: string; // Bắt buộc phải có ID để biết sửa ai

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @IsOptional()
  @IsString()
  courtId?: string;

  @IsOptional()
  @IsString()
  avatar?: string;
}
