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

// Input tạo mới (Service -> Repository)
export interface ICreateAccountRepositoryInput {
  email: string;
  password: string;
  name: string; // Sẽ map vào fullName trong DB
  phone?: string;
  role?: 'ADMIN' | 'STAFF';
  avatar?: string;
}

export interface ICreateAccountServiceInput {
  email: string;
  name: string;
  phone?: string;
  role?: 'ADMIN' | 'STAFF';
  avatar?: string;
}

// Input đổi mật khẩu
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

// Input Reset mật khẩu (Quên mật khẩu)
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

// Input Lọc danh sách (Dashboard/Admin)
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
}

// Input Cập nhật thông tin
export class IUpdateAccountInput {
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  avatar?: string;
}

export interface IUpdateProfileInput {
  fullName?: string;
  phone?: string;
  avatar?: string;
}

// Định nghĩa cấu trúc Filter đầu vào
export interface GetAccountsFilter {
  page?: number;
  limit?: number;
  search?: string;
}

// Định nghĩa Metadata cho phân trang
export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Định nghĩa Interface trả về chung (Generic)
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
