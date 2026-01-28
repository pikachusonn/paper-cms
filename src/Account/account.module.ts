import { Module } from '@nestjs/common';
import { AccountResolver } from './account.resolver.js';
import { PrismaService } from '../service/prisma.service.js';
import { AccountService } from './account.service.js';
import { AccountRepository } from './account.repository.js';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from '../utils/jwtStrategy.js';
import { jwtProviders } from '../utils/jwt.providers.js';
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
      }),
    }),
  ],
  providers: [
    AccountResolver,
    AccountService,
    AccountRepository,
    PrismaService,
    JwtStrategy,
    ...jwtProviders,
  ],
})
export class AccountModule {}
