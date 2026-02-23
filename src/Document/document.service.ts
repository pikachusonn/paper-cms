import { Injectable } from '@nestjs/common';
import { DocumentRepository } from './document.repository.js';
import * as graphql from '../graphql.js';
import {
  DocumentCreateInput,
  DocumentCreateManyInput,
} from '../generated/prisma/models.js';
@Injectable()
export class DocumentService {
  constructor(private readonly documentRepository: DocumentRepository) {}

  async getDocumentsByCourtId(documentFilter: graphql.DocumentFilter) {
    return await this.documentRepository.findDocumentByCourtId(documentFilter);
  }

  async getDetailedDocument(documentId: string) {
    return await this.documentRepository.findDocumentById(documentId);
  }

  async createSingleDocument(documentPayload: graphql.DocumentPayload) {
    const document: DocumentCreateInput = {
      content: documentPayload.content,
      court: {
        connect: {
          id: documentPayload.court,
        },
      },
      documentCode: documentPayload.documentCode,
      pricePerDocument: documentPayload.pricePerDocument,
      processAddress: documentPayload.processAddress,
      processDeadline: documentPayload.processDeadline,
      travelDistance: documentPayload.travelDistance,
      receivedDate: documentPayload.receiveDate,
      ...(documentPayload?.courtStaff && {
        courtStaff: {
          connect: {
            id: documentPayload.courtStaff,
          },
        },
      }),
      ...(documentPayload?.processProof && {
        processProof: documentPayload.processProof,
      }),
    };
    return await this.documentRepository.createSingleDocument(document);
  }

  async createMultiDocument(documentPayload: graphql.DocumentPayload[]) {
    const documents: DocumentCreateManyInput[] = documentPayload?.map((doc) => {
      return {
        content: doc.content,
        courtId: doc.court,
        documentCode: doc.documentCode,
        pricePerDocument: doc.pricePerDocument,
        processAddress: doc.processAddress,
        processDeadline: doc.processDeadline,
        travelDistance: doc.travelDistance,
        receivedDate: doc.receiveDate,
        ...(doc?.courtStaff && {
          courtStaffId: doc.courtStaff,
        }),
        ...(doc?.processProof && {
          processProof: doc.processProof,
        }),
      };
    });
    return await this.documentRepository.createMultiDocument(documents);
  }
}
