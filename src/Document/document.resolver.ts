import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { parseISO, isAfter } from 'date-fns';
import { DocumentStatus } from '../generated/prisma/enums.js';
import { DocumentService } from './document.service.js';
import * as graphql from '../graphql.js';

@Resolver('Document')
export class DocumentResolver {
  constructor(private readonly documentService: DocumentService) {}

  @Query('documentsByCourtId')
  async documentsByCourtId(
    @Args('documentFilter') documentFilter: graphql.DocumentFilter,
  ) {
    return await this.documentService.getDocumentsByCourtId(documentFilter);
  }

  @Query('document')
  async document(@Args('id') documentId: string) {
    return await this.documentService.getDetailedDocument(documentId);
  }

  @Mutation('createMutation')
  async createMutation(
    @Args('createMutationRequest') documentPayload: graphql.DocumentPayload,
  ) {
    return await this.documentService.createSingleDocument(documentPayload);
  }

  @Mutation('createFromImport')
  async createFromImport(
    @Args('createFromImportRequest') documentPayload: graphql.DocumentPayload[],
  ) {
    return await this.documentService.createMultiDocument(documentPayload);
  }

  @ResolveField('isLate')
  isLate(@Parent() document: any): boolean {
    const now = new Date();
    const deadline = parseISO(document.processDeadline);
    return (
      document.processStatus === DocumentStatus.PENDING &&
      isAfter(now, deadline)
    );
  }
}
