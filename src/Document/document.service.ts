import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { DocumentRepository } from './document.repository.js';
import { Role, DocumentStatus } from '@prisma/client';

@Injectable()
export class DocumentService {
  constructor(private readonly documentRepository: DocumentRepository) {}

  /**
   * 1. Lấy danh sách văn bản theo bộ lọc (Dashboard)
   */
  async getDocumentsByCourt(filter: any) {
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
  async createDocument(input: any, currentUser: any) {
    // Ép cứng creatorId là ID của người đang đăng nhập (lấy từ Token) cho an toàn
    const payload = {
      ...input,
      creatorId: currentUser.sub,
    };
    return await this.documentRepository.createSingleDocument(payload);
  }

  /**
   * 4. Cập nhật văn bản (Sửa thông tin / Nhập kết quả tống đạt)
   */
  async updateDocument(input: any, currentUser: any) {
    const exist = await this.documentRepository.findDocumentById(input.id);
    if (!exist) {
      throw new NotFoundException(`Không tìm thấy văn bản có ID: ${input.id}`);
    }

    // ⛔ LOGIC KHÓA: Đã duyệt thì Staff không được sửa (Chỉ Admin mới có quyền)
    if (
      exist.status === DocumentStatus.CONFIRMED &&
      currentUser.role !== Role.ADMIN
    ) {
      throw new ForbiddenException(
        'Văn bản đã được duyệt. Bạn không có quyền chỉnh sửa!',
      );
    }

    return await this.documentRepository.updateDocument(input);
  }

  /**
   * 5. Xóa văn bản (Soft Delete)
   */
  async deleteDocument(id: string, currentUser: any) {
    const exist = await this.documentRepository.findDocumentById(id);
    if (!exist) {
      throw new NotFoundException(`Không tìm thấy văn bản có ID: ${id}`);
    }

    // ⛔ LOGIC KHÓA: Đã duyệt thì Staff không được xóa
    if (
      exist.status === DocumentStatus.CONFIRMED &&
      currentUser.role !== Role.ADMIN
    ) {
      throw new ForbiddenException(
        'Văn bản đã được duyệt. Bạn không có quyền xóa!',
      );
    }

    await this.documentRepository.deleteDocument(id);
    return true; // Trả về true để khớp với kiểu Boolean! trong GraphQL
  }

  /**
   * 6. Admin Xác nhận văn bản (MỚI)
   */
  async confirmDocument(id: string) {
    const exist = await this.documentRepository.findDocumentById(id);
    if (!exist) {
      throw new NotFoundException(`Không tìm thấy văn bản có ID: ${id}`);
    }

    // Tái sử dụng hàm update của Repo để đổi status
    return await this.documentRepository.updateDocument({
      id,
      status: DocumentStatus.CONFIRMED,
    });
  }

  /**
   * 7. Tạo nhiều văn bản (Dùng cho Import Excel)
   */
  // async createMultiDocument(inputs: any[], currentUser: any) {
  //   // Duyệt qua mảng dữ liệu FE gửi lên, nhét creatorId (từ Token) vào từng dòng
  //   const payloads = inputs.map((input) => ({
  //     ...input,
  //     creatorId: currentUser.sub,
  //   }));

  //   // createMany của Prisma sẽ trả về object { count: number }
  //   const result = await this.documentRepository.createMultiDocument(payloads);

  //   // Trả về số lượng dòng đã thêm thành công
  //   return result.count;
  // }
  async getOfficialsByCourt(courtId: string) {
    return await this.documentRepository.findOfficialsByCourtId(courtId);
  }

  /**
   * 8. Import Excel có Validate (Báo lỗi từng dòng & Map tên nhân viên)
   */
  async createBulkDocuments(inputs: any[], currentUser: any) {
    const validData: any[] = [];
    const errors: any[] = [];

    // 1. Chuẩn bị dữ liệu để check trùng
    const courtIds = [
      ...new Set(inputs.map((i) => i.courtId).filter(Boolean)),
    ] as string[];
    const docCodes = [
      ...new Set(inputs.map((i) => i.docCode).filter(Boolean)),
    ] as string[];

    // 2. QUERY 1 LẦN: Lấy cả nhân sự và các mã văn bản đã tồn tại
    const [officials, existingDocs] = await Promise.all([
      this.documentRepository.findOfficialsByCourtIds(courtIds),
      this.documentRepository.findExistingDocs(docCodes, courtIds),
    ]);

    // 3. Đổ vào Set/Map để tra cứu siêu tốc
    const officialMap = new Map<string, string>();
    officials.forEach((off) =>
      officialMap.set(
        `${off.courtId}_${off.name.toLowerCase().trim()}`,
        off.id,
      ),
    );

    const existingSet = new Set(
      existingDocs.map((d) => `${d.courtId}_${d.docCode}`),
    );
    const localSeen = new Set(); // Dùng để check trùng ngay trong chính file Excel đang import

    // 4. Duyệt từng dòng
    inputs.forEach((input, index) => {
      const rowIndex = input._rowIndex ?? index + 2;
      const rowErrors: string[] = [];

      // --- Các validate cơ bản ---
      if (!input.docCode) rowErrors.push('Thiếu Mã văn bản');
      if (!input.courtId) rowErrors.push('Thiếu Tòa án tiếp nhận');
      // ... (các validate khác giữ nguyên)

      // --- 👇 CHECK TRÙNG DỮ LIỆU ---
      if (input.docCode && input.courtId) {
        const uniqueKey = `${input.courtId}_${input.docCode}`;

        // Kiểm tra trùng với Database
        if (existingSet.has(uniqueKey)) {
          rowErrors.push(
            `Mã văn bản "${input.docCode}" đã tồn tại trên hệ thống`,
          );
        }
        // Kiểm tra trùng ngay trong file Excel (dòng này giống dòng trước đó)
        else if (localSeen.has(uniqueKey)) {
          rowErrors.push(
            `Mã văn bản "${input.docCode}" bị lặp lại trong file Excel`,
          );
        } else {
          localSeen.add(uniqueKey); // Đánh dấu mã này đã xuất hiện trong lượt import này
        }
      }

      // Mapping nhân sự
      let mappedOfficialId: string | undefined = undefined;
      if (input.responsibleOfficialName) {
        mappedOfficialId = officialMap.get(
          `${input.courtId}_${input.responsibleOfficialName.toLowerCase().trim()}`,
        );
        if (!mappedOfficialId)
          rowErrors.push(
            `Không tìm thấy nhân sự: "${input.responsibleOfficialName}"`,
          );
      }

      if (rowErrors.length > 0) {
        errors.push({ rowIndex, message: rowErrors.join(', ') });
      } else {
        const { _rowIndex, responsibleOfficialName, ...cleanPayload } = input;
        validData.push({
          ...cleanPayload,
          responsibleOfficialId: mappedOfficialId || null,
          creatorId: currentUser.sub,
        });
      }
    });

    // 5. Lưu Database
    let successCount = 0;
    if (validData.length > 0) {
      const result =
        await this.documentRepository.createMultiDocument(validData);
      successCount = result.count;
    }

    return { successCount, errors };
  }
}
