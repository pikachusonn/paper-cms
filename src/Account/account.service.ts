import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountRepository } from './account.repository.js';
import * as bcrypt from 'bcrypt';
import { ACCESS_JWT, REFRESH_JWT } from '../utils/jwt.providers.js';
import { LoginRequest } from '../interface/account.js';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AccountService {
  constructor(
    private readonly accountRepository: AccountRepository,
    @Inject(ACCESS_JWT) private readonly accessJwt: JwtService,
    @Inject(REFRESH_JWT) private readonly refreshJwt: JwtService,
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
}
