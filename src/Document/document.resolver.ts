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
import { JwtAuthGuard } from '../guard/jwtAuth.guard.js';

@Resolver('Document')
export class DocumentResolver {
  constructor(private readonly documentService: DocumentService) {}

  // --- 1. QUERY ---

  @Query('getDocumentsByCourt')
  @UseGuards(JwtAuthGuard)
  async getDocumentsByCourt(@Args('filter') filter: any) {
    // Tên tham số trong Schema là 'filter', nên ở đây @Args('filter')
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
  async createDocument(@Args('input') input: any) {
    // Tên tham số trong Schema là 'input', nên ở đây @Args('input')
    return await this.documentService.createDocument(input);
  }

  // Lưu ý: Mutation 'createFromImport' đã bị bỏ trong Schema mới
  // Nên tôi xóa đi để tránh lỗi "defined in resolver but not in schema"

  // --- 3. FIELD TÍNH TOÁN (ResolveField) ---

  // Tính toán trường 'isOverdue' (Thay cho isLate cũ)
  @ResolveField('isOverdue')
  isOverdue(@Parent() doc: any): boolean {
    // Logic: Nếu đã xong (COMPLETED/CONFIRMED) thì ko bao giờ quá hạn
    if (
      doc.status === DocumentStatus.COMPLETED ||
      doc.status === DocumentStatus.CONFIRMED
    ) {
      return false;
    }
    // Logic: Nếu chưa xong mà Hạn < Hiện tại -> Quá hạn
    // Lưu ý: DB mới dùng field 'dueDate', ko phải 'processDeadline'
    return new Date(doc.dueDate) < new Date();
  }

  // Tính toán trường 'isUrgent' (Sắp đến hạn trong 24h)
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
