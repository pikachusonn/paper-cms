import { Args, Query, Resolver } from '@nestjs/graphql';
import { AccountService } from './account.service.js';

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
}
