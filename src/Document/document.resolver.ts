import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { parseISO, isAfter } from 'date-fns';
import { DocumentStatus } from '../generated/prisma/enums.js';
import { DocumentService } from './document.service.js';
@Resolver('Document')
export class DocumentResolver {
  constructor(private readonly documentService: DocumentService) {}

  @Query('documentsByCourtId')
  async documentsByCourtId(@Args('courtId') courtId: string) {
    return await this.documentService.getDocumentsByCourtId(courtId);
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
