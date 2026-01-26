import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { PrismaService } from '../service/prisma.service.js';
import { AuthRepository } from './auth.repository.js';
import { AuthResolver } from './auth.resolver.js';

@Module({
  providers: [AuthService, PrismaService, AuthRepository, AuthResolver],
})
export class AuthModule {}
