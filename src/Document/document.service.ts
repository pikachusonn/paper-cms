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

  async getDocumentsByCourt(filter: any) {
    // Gọi hàm bên Repository (Hàm này đã xử lý logic lọc + phân trang + đếm số liệu)
    // Lưu ý: Đảm bảo bên DocumentRepository bạn đã copy đoạn code xử lý filter mới nhất
    return await this.documentRepository.findDocumentByCourtId(filter);
  }

  /**
   * Lấy chi tiết 1 văn bản
   */
  async getDocumentById(id: string) {
    return await this.documentRepository.findDocumentById(id);
  }

  /**
   * Tạo mới văn bản (Logic mapping input -> DB đã nằm trong Repository)
   */
  async createDocument(input: any) {
    // Không cần map tay từng trường như code cũ nữa
    // Repository.createSingleDocument đã có hàm sanitizePayload để lo việc này
    return await this.documentRepository.createSingleDocument(input);
  }

  /**
   * Cập nhật văn bản (Dùng cho popup sửa / nhập kết quả tống đạt)
   */
  async updateDocument(input: any) {
    // Bạn cần viết thêm hàm updateDocument bên Repository tương tự create
    // return await this.documentRepository.updateDocument(input);
    return null; // Placeholder để code không báo lỗi nếu chưa làm
  }

  /**
   * Xóa văn bản
   */
  async deleteDocument(id: string) {
    // return await this.documentRepository.deleteDocument(id);
    return true; // Placeholder
  }

  // --- GIỮ LẠI CÁC HÀM CŨ NẾU CẦN TƯƠNG THÍCH (Optional) ---
  // Nếu bạn muốn giữ lại hàm createMultiDocument cho tính năng Import Excel sau này:
  async createMultiDocument(inputs: any[]) {
    return await this.documentRepository.createMultiDocument(inputs);
  }
}
