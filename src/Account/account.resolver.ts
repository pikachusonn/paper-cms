import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccountService } from './account.service.js';
import {
  IChangePasswordInput,
  IResetPasswordInput,
} from '../interface/account.js';

@Resolver()
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Query()
  accounts() {
    return this.accountService.findAllAccounts();
  }

  @Query()
  account(@Args('id') id: string) {
    return this.accountService.findAccountById(id);
  }

  @Mutation('login')
  login(@Args('loginRequest') loginRequest: any) {
    return this.accountService.login(loginRequest);
  }

  @Mutation('createAccount')
  async createAccount(@Args('input') input: any) {
    return await this.accountService.createAccount(input);
  }

  @Mutation('logout')
  async logout(@Args('userId') userId: string) {
    return await this.accountService.logout(userId);
  }

  @Mutation('changePassword')
  // 👇 Đã thay 'any' bằng 'IChangePasswordInput' -> Gõ input. sẽ có gợi ý
  async changePassword(@Args('input') input: IChangePasswordInput) {
    return await this.accountService.changePassword(input);
  }

  @Mutation('forgotPassword')
  async forgotPassword(@Args('email') email: string) {
    return await this.accountService.forgotPassword(email);
  }

  @Mutation('resetPassword')
  // 👇 Đã thay 'any' bằng 'IResetPasswordInput'
  async resetPassword(@Args('input') input: IResetPasswordInput) {
    return await this.accountService.resetPassword(input);
  }
}
