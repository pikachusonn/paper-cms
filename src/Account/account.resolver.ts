import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Role } from '@prisma/client';
import { AccountService } from './account.service.js';
import {
  IAccountFilterInput,
  IChangePasswordInput,
  IResetPasswordInput,
  IUpdateAccountInput,
} from '../interface/account.js';
import type { IUpdateProfileInput } from '../interface/account.js';
import { RolesGuard } from '../guard/roles.guard.js';
import { Roles } from '../decorator/roles.decorator.js';
import { CurrentUser } from '../decorator/current-user.decorator.js';
import { JwtAuthGuard } from '../guard/jwtAuth.guard.js';

@Resolver()
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  // --- CÁC API CÔNG KHAI (KHÔNG CẦN GUARD) ---

  @Mutation('login')
  login(@Args('loginRequest') loginRequest: any) {
    return this.accountService.login(loginRequest);
  }

  @Mutation('forgotPassword')
  async forgotPassword(@Args('email') email: string) {
    return await this.accountService.forgotPassword(email);
  }

  @Mutation('resetPassword')
  async resetPassword(@Args('input') input: IResetPasswordInput) {
    return await this.accountService.resetPassword(input);
  }

  // --- CÁC API CẦN ĐĂNG NHẬP (GqlAuthGuard) ---

  @Query()
  @UseGuards(JwtAuthGuard) // 🔒 Phải đăng nhập mới xem được ds
  accounts() {
    return this.accountService.findAllAccounts();
  }

  @Query()
  @UseGuards(JwtAuthGuard)
  account(@Args('id') id: string) {
    return this.accountService.findAccountById(id);
  }

  @Mutation('logout')
  @UseGuards(JwtAuthGuard)
  async logout(@CurrentUser() user: any) {
    return await this.accountService.logout(user.id);
  }

  @Mutation('changePassword')
  @UseGuards(JwtAuthGuard)
  async changePassword(
    @Args('input') input: IChangePasswordInput,
    @CurrentUser() user: any,
  ) {
    input.userId = user.userId;
    return await this.accountService.changePassword(input);
  }

  // --- CÁC API CHỈ ADMIN MỚI ĐƯỢC DÙNG (GqlAuthGuard + RolesGuard) ---

  @Mutation('createAccount')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN) // 👮 Chỉ ADMIN
  async createAccount(@Args('input') input: any) {
    return await this.accountService.createAccount(input);
  }

  @Query('getAllAccounts')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async getAllAccounts(@Args('filter') filter: IAccountFilterInput) {
    return await this.accountService.getAllAccounts(filter || {});
  }

  @Mutation('updateAccount')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async updateAccount(@Args('input') input: IUpdateAccountInput) {
    return await this.accountService.updateAccount(input);
  }

  @Mutation('deleteAccount')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async deleteAccount(@Args('id') id: string) {
    await this.accountService.deleteAccount(id); // Gọi hàm xóa (update isDeleted = true)
    return true;
  }

  @Query('getStaffAccounts')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN) // 👮 Chỉ Admin mới được xem danh sách nhân viên
  async getStaffAccounts(@Args('search') search?: string) {
    return await this.accountService.getStaffAccounts(search);
  }

  @Query('getAdminAccounts')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN) // 👮 Chỉ Admin mới được xem danh sách admin
  async getAdminAccounts(@Args('search') search?: string) {
    return await this.accountService.getAllAdmins(search);
  }

  @Mutation('updateProfile')
  @UseGuards(JwtAuthGuard) // Bắt buộc phải đăng nhập
  async updateProfile(
    @Args('input') input: IUpdateProfileInput,
    @CurrentUser() user: any, // Lấy user từ Token
  ) {
    // user.sub chính là ID của tài khoản đang đăng nhập
    return await this.accountService.updateProfile(user.sub, input);
  }
}
