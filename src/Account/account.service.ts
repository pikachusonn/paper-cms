import { Injectable } from '@nestjs/common';
import { AccountRepository } from './account.repository.js';

@Injectable()
export class AccountService {
  constructor(private readonly accountRepository: AccountRepository) {}

  async findAllAccounts() {
    return await this.accountRepository.findAllAccounts();
  }

  async findAccountById(id: string) {
    return await this.accountRepository.findAccountById(id);
  }
}
