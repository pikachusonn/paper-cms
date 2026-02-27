import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { DocumentStatus, Role } from '@prisma/client';
import { DocumentService } from './document.service.js';
import { CurrentUser } from '../decorator/current-user.decorator.js';
import { JwtAuthGuard } from '../guard/jwtAuth.guard.js';
import { RolesGuard } from '../guard/roles.guard.js';
import { Roles } from '../decorator/roles.decorator.js';

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
  async createDocument(@Args('input') input: any, @CurrentUser() user: any) {
    // Truyền thẳng user xuống Service (Service đã xử lý logic lấy user.sub)
    return await this.documentService.createDocument(input, user);
  }

  @Mutation('updateDocument')
  @UseGuards(JwtAuthGuard)
  async updateDocument(
    @Args('input') input: any,
    @CurrentUser() user: any, // 👇 Bổ sung user để Service check quyền sửa
  ) {
    return await this.documentService.updateDocument(input, user);
  }

  @Mutation('deleteDocument')
  @UseGuards(JwtAuthGuard)
  async deleteDocument(
    @Args('id') id: string,
    @CurrentUser() user: any, // 👇 Bổ sung user để Service check quyền xóa
  ) {
    return await this.documentService.deleteDocument(id, user);
  }

  // 👇 MỚI: Thêm hàm Duyệt văn bản (Chỉ Admin)
  @Mutation('confirmDocument')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN) // 👮 Chặn đứng Staff ngay từ cửa
  async confirmDocument(@Args('id') id: string) {
    return await this.documentService.confirmDocument(id);
  }

  // @Mutation('createMultipleDocuments')
  // @UseGuards(JwtAuthGuard)
  // async createMultipleDocuments(
  //   @Args('inputs') inputs: any[],
  //   @CurrentUser() user: any,
  // ) {
  //   return await this.documentService.createMultiDocument(inputs, user);
  // }

  // --- 3. FIELD TÍNH TOÁN (ResolveField) ---

  @ResolveField('isOverdue')
  isOverdue(@Parent() doc: any): boolean {
    if (
      doc.status === DocumentStatus.COMPLETED ||
      doc.status === DocumentStatus.CONFIRMED
    ) {
      return false;
    }
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

    return due > now && due - now <= oneDay;
  }

  @Query('getOfficialsByCourt')
  @UseGuards(JwtAuthGuard)
  async getOfficialsByCourt(@Args('courtId') courtId: string) {
    return await this.documentService.getOfficialsByCourt(courtId);
  }

  @Mutation('createBulkDocuments')
  @UseGuards(JwtAuthGuard)
  async createBulkDocuments(
    @Args('inputs') inputs: any[],
    @CurrentUser() user: any,
  ) {
    return await this.documentService.createBulkDocuments(inputs, user);
  }
}
