import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsDate,
  IsMongoId,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateOfferingDto {
  @IsNumber()
  @ApiProperty()
  readonly quantity: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly address: string;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  readonly date: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly type: string;

  @IsNotEmpty()
  @IsMongoId()
  readonly user: string;

  @IsNotEmpty()
  @IsMongoId()
  readonly church: string;
}

export class UpdateOfferingDto extends PartialType(CreateOfferingDto) {}
