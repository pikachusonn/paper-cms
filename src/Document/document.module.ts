import { Module } from '@nestjs/common';
import { DocumentResolver } from './document.resolver.js';
import { DocumentService } from './document.service.js';
import { DocumentRepository } from './document.repository.js';
import { PrismaService } from '../service/prisma.service.js';

@Module({
  providers: [
    DocumentResolver,
    DocumentService,
    DocumentRepository,
    PrismaService,
  ],
})
export class DocumentModule {}
