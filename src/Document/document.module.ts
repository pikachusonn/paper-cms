import { Module } from '@nestjs/common';
import { DocumentResolver } from './document.resolver.js';
import { DocumentService } from './document.service.js';
import { DocumentRepository } from './document.repository.js';
import { PrismaService } from '../service/prisma.service.js';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
      }),
    }),
  ],
  providers: [
    DocumentResolver,
    DocumentService,
    DocumentRepository,
    PrismaService,
  ],
})
export class DocumentModule {}
