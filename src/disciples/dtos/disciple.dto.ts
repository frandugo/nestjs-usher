import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsMongoId,
  IsNumber,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateDiscipleDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly last_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly address: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'the email of user' })
  readonly email: string;

  @IsNotEmpty()
  @IsNumber()
  readonly phone: string;

  @IsNotEmpty()
  @IsMongoId()
  readonly evangelizer: string;
}

export class UpdateDiscipleDto extends PartialType(CreateDiscipleDto) {}
