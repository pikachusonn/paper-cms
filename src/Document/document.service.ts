import { Injectable, NotFoundException } from '@nestjs/common';
import { DocumentRepository } from './document.repository.js';

@Injectable()
export class DocumentService {
  constructor(private readonly documentRepository: DocumentRepository) {}

  /**
   * 1. Lấy danh sách văn bản theo bộ lọc (Dashboard)
   */
  async getDocumentsByCourt(filter: any) {
    // Repository đã xử lý phân trang, lọc theo năm/trạng thái và đếm số liệu
    return await this.documentRepository.findDocumentByCourtId(filter);
  }

  /**
   * 2. Lấy chi tiết 1 văn bản
   */
  async getDocumentById(id: string) {
    const doc = await this.documentRepository.findDocumentById(id);
    if (!doc) {
      throw new NotFoundException('Văn bản không tồn tại hoặc đã bị xóa');
    }
    return doc;
  }

  /**
   * 3. Tạo mới văn bản
   */
  async createDocument(input: any) {
    // Input nhận vào đã có creatorId (từ token) và responsibleOfficialId (từ dropdown)
    // Repository sẽ lo việc sanitize (làm sạch) và mapping dữ liệu
    return await this.documentRepository.createSingleDocument(input);
  }

  /**
   * 4. Cập nhật văn bản (Sửa thông tin / Nhập kết quả tống đạt)
   */
  async updateDocument(input: any) {
    // Kiểm tra văn bản có tồn tại không trước khi sửa
    const exist = await this.documentRepository.findDocumentById(input.id);
    if (!exist) {
      throw new NotFoundException(`Không tìm thấy văn bản có ID: ${input.id}`);
    }

    // Gọi Repository để update
    // (Logic tự động chuyển trạng thái sang COMPLETED nếu có ảnh đã nằm trong Repo)
    return await this.documentRepository.updateDocument(input);
  }

  /**
   * 5. Xóa văn bản
   */
  async deleteDocument(id: string) {
    // Kiểm tra tồn tại
    const exist = await this.documentRepository.findDocumentById(id);
    if (!exist) {
      throw new NotFoundException(`Không tìm thấy văn bản có ID: ${id}`);
    }

    return await this.documentRepository.deleteDocument(id);
  }

  /**
   * 6. Tạo nhiều văn bản (Dùng cho tính năng Import Excel)
   */
  async createMultiDocument(inputs: any[]) {
    return await this.documentRepository.createMultiDocument(inputs);
  }
}
