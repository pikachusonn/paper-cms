import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateDocumentInput {
  @IsNotEmpty()
  @IsString()
  courtId: string;

  @IsNotEmpty()
  @IsString()
  docCode: string;

  @IsOptional()
  @IsDateString()
  receivedDate?: string;

  @IsNotEmpty()
  @IsString()
  docType: string;

  @IsNotEmpty()
  @IsString()
  recipient: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsNotEmpty()
  @IsDateString()
  dueDate: string;

  @IsOptional()
  @IsString()
  deliveryMethod?: string;

  @IsOptional()
  @IsString()
  responsiblePerson?: string;

  @IsOptional()
  @IsString()
  content?: string;
}
