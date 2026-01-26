import { Module } from '@nestjs/common';
import { AccountResolver } from './account.resolver.js';
import { PrismaService } from '../service/prisma.service.js';
import { AccountService } from './account.service.js';
import { AccountRepository } from './account.repository.js';

@Module({
  providers: [
    AccountResolver,
    AccountService,
    AccountRepository,
    PrismaService,
  ],
})
export class AccountModule {}
