import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { DocumentStatus } from '@prisma/client';
import { DocumentService } from './document.service.js';
import { CurrentUser } from '../decorator/current-user.decorator.js';
import { JwtAuthGuard } from '../guard/jwtAuth.guard.js';

@Resolver('Document')
export class DocumentResolver {
  constructor(private readonly documentService: DocumentService) {}

  // --- 1. QUERY ---

  @Query('getDocumentsByCourt')
  @UseGuards(JwtAuthGuard)
  async getDocumentsByCourt(@Args('filter') filter: any) {
    return await this.documentService.getDocumentsByCourt(filter);
  }

  @Query('document')
  @UseGuards(JwtAuthGuard)
  async document(@Args('id') id: string) {
    return await this.documentService.getDocumentById(id);
  }

  // --- 2. MUTATION ---

  @Mutation('createDocument')
  @UseGuards(JwtAuthGuard)
  async createDocument(
    @Args('input') input: any,
    @CurrentUser() user: any, // 👇 Lấy User từ Token
  ) {
    // 👇 Gán creatorId = ID người đang đăng nhập
    const payload = {
      ...input,
      creatorId: user.sub,
    };
    return await this.documentService.createDocument(payload);
  }

  // 👇 Bổ sung Update (Nếu thiếu sẽ lỗi server)
  @Mutation('updateDocument')
  @UseGuards(JwtAuthGuard)
  async updateDocument(@Args('input') input: any) {
    return await this.documentService.updateDocument(input);
  }

  // 👇 Bổ sung Delete (Nếu thiếu sẽ lỗi server)
  @Mutation('deleteDocument')
  @UseGuards(JwtAuthGuard)
  async deleteDocument(@Args('id') id: string) {
    return await this.documentService.deleteDocument(id);
  }

  // --- 3. FIELD TÍNH TOÁN (ResolveField) ---

  @ResolveField('isOverdue')
  isOverdue(@Parent() doc: any): boolean {
    if (
      doc.status === DocumentStatus.COMPLETED ||
      doc.status === DocumentStatus.CONFIRMED
    ) {
      return false;
    }
    // So sánh ngày hiện tại với dueDate
    return new Date(doc.dueDate) < new Date();
  }

  @ResolveField('isUrgent')
  isUrgent(@Parent() doc: any): boolean {
    if (
      doc.status === DocumentStatus.COMPLETED ||
      doc.status === DocumentStatus.CONFIRMED
    ) {
      return false;
    }

    const now = new Date().getTime();
    const due = new Date(doc.dueDate).getTime();
    const oneDay = 24 * 60 * 60 * 1000;

    // Logic: Chưa quá hạn VÀ còn dưới 1 ngày là đến hạn
    return due > now && due - now <= oneDay;
  }
}
