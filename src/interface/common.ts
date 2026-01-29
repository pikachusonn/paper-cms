import { ErrorKey } from 'src/constant/common.js';
import { DocumentStatus } from '../generated/prisma/enums.js';

export interface ApiErrorResponse {
  statusCode: number;
  message: string | string[];
  errorKey?: ErrorKey;
  timestamp: string;
}

export interface JwtPayload {
  sub: string;
  email: string;
  role: string;
}

export interface CourtFilter {
  startDate: string;
  endDate: string;
  documentStatus: DocumentStatus;
}
