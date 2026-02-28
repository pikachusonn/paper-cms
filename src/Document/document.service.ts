import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { DocumentRepository } from './document.repository.js';
import { Role, DocumentStatus } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class DocumentService {
  constructor(
    private readonly documentRepository: DocumentRepository,
    private readonly jwtService: JwtService,
  ) {}

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

    // 1. Chuẩn bị dữ liệu để check trùng (lấy ID tòa án và Mã văn bản)
    const courtIds = [
      ...new Set(inputs.map((i) => i.courtId).filter(Boolean)),
    ] as string[];
    const docCodes = [
      ...new Set(inputs.map((i) => i.docCode).filter(Boolean)),
    ] as string[];

    // 2. QUERY 1 LẦN: Lấy danh sách nhân sự VÀ các mã văn bản ĐÃ TỒN TẠI trong DB
    const [officials, existingDocs] = await Promise.all([
      this.documentRepository.findOfficialsByCourtIds(courtIds),
      this.documentRepository.findExistingDocs(docCodes, courtIds),
    ]);

    // 3. Đổ vào Set/Map để tra cứu siêu tốc O(1)
    const officialMap = new Map<string, string>();
    officials.forEach((off) =>
      officialMap.set(
        `${off.courtId}_${off.name.toLowerCase().trim()}`,
        off.id,
      ),
    );

    // Set chứa các mã đã có trên Database
    const existingSet = new Set(
      existingDocs.map((d) => `${d.courtId}_${d.docCode}`),
    );
    // Set chứa các mã đang duyệt trong vòng lặp (chống duplicate trong chính file Excel)
    const localSeen = new Set<string>();

    // 4. Duyệt từng dòng để Validate
    inputs.forEach((input, index) => {
      const rowIndex = input._rowIndex ?? index + 2;
      const rowErrors: string[] = [];

      // --- Các validate bắt buộc cơ bản ---
      if (!input.docCode) rowErrors.push('Thiếu Mã văn bản');
      if (!input.docType) rowErrors.push('Thiếu Trích yếu');
      if (!input.recipient) rowErrors.push('Thiếu Người nhận');
      if (!input.dueDate) rowErrors.push('Thiếu Hạn tống đạt');
      if (!input.courtId) rowErrors.push('Thiếu Tòa án tiếp nhận');
      if (!input.responsibleOfficialName)
        rowErrors.push('Thiếu người chịu trách nhiệm');

      // --- CHECK TRÙNG LẶP MÃ VĂN BẢN ---
      if (input.docCode && input.courtId) {
        const uniqueKey = `${input.courtId}_${input.docCode}`;

        // Kiểm tra trùng với Database
        if (existingSet.has(uniqueKey)) {
          rowErrors.push(
            `Mã văn bản "${input.docCode}" đã tồn tại trên hệ thống`,
          );
        }
        // Kiểm tra trùng lặp ngay trong chính file Excel
        else if (localSeen.has(uniqueKey)) {
          rowErrors.push(
            `Mã văn bản "${input.docCode}" bị lặp lại trong file Excel`,
          );
        } else {
          // Đánh dấu mã này đã xuất hiện để kiểm tra cho các dòng tiếp theo
          localSeen.add(uniqueKey);
        }
      }

      // --- Mapping tên nhân sự sang ID ---
      let mappedOfficialId: string | undefined = undefined;
      if (input.responsibleOfficialName) {
        mappedOfficialId = officialMap.get(
          `${input.courtId}_${input.responsibleOfficialName.toLowerCase().trim()}`,
        );
        if (!mappedOfficialId) {
          rowErrors.push(
            `Không tìm thấy nhân sự: "${input.responsibleOfficialName}"`,
          );
        }
      }

      // --- Đánh giá dòng data ---
      if (rowErrors.length > 0) {
        errors.push({ rowIndex, message: rowErrors.join(', ') });
      } else {
        // Bóc tách loại bỏ các trường thừa (chỉ giữ lại data hợp lệ cho DB)
        const { _rowIndex, responsibleOfficialName, ...cleanPayload } = input;
        validData.push({
          ...cleanPayload,
          responsibleOfficialId: mappedOfficialId || null,
          creatorId: currentUser.sub,
        });
      }
    });

    // 5. Lưu Database những dòng SẠCH
    let successCount = 0;
    if (validData.length > 0) {
      const result =
        await this.documentRepository.createMultiDocument(validData);
      successCount = result.count;
    }

    return { successCount, errors };
  }

  /**
   * TẠO LINK PUBLIC IMPORT (Có hiệu lực 30 phút)
   */
  async generatePublicImportLink(courtId: string, currentUser: any) {
    // 1. Nhét courtId và creatorId vào cục data của Token
    const payload = {
      courtId: courtId,
      creatorId: currentUser.sub,
      purpose: 'PUBLIC_BULK_IMPORT', // Đánh dấu mục đích để không bị dùng nhầm token khác
    };

    // 2. Ký token với hạn sử dụng 30 phút
    const token = this.jwtService.sign(payload, { expiresIn: '30m' });

    // 3. Trả về URL cho FE (Sếp đổi port 3001 thành domain thật của sếp sau này nhé)
    return `http://localhost:3001/public-import?token=${token}`;
  }

  async getPublicOfficials(token: string) {
    let payload;

    // 1. Giải mã token y hệt như lúc Import
    try {
      payload = this.jwtService.verify(token);
    } catch (error) {
      throw new UnauthorizedException(
        'Link truy cập đã hết hạn (30 phút) hoặc không hợp lệ.',
      );
    }

    // 2. Chốt chặn bảo mật mục đích token
    if (payload.purpose !== 'PUBLIC_BULK_IMPORT') {
      throw new UnauthorizedException('Token sai mục đích sử dụng!');
    }

    // 3. Token ngon nghẻ -> Lấy courtId ra và truy vấn DB
    const courtId = payload.courtId;
    return await this.documentRepository.getOfficialsForDropdown(courtId);
  }
}
