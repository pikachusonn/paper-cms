import { Injectable } from '@nestjs/common';
import { DocumentRepository } from './document.repository.js';

@Injectable()
export class DocumentService {
  constructor(private readonly documentRepository: DocumentRepository) {}

  async getDocumentsByCourtId(courtId: string) {
    return await this.documentRepository.findDocumentByCourtId(courtId);
  }
}
