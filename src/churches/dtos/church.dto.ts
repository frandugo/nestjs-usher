import { IsString, IsNotEmpty, IsEmail, IsArray } from 'class-validator';
import { PartialType, ApiProperty, OmitType } from '@nestjs/swagger';

export class CreateChurchDto {
  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsEmail()
  @ApiProperty({ description: 'the email of church' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly address: string;

  @IsString()
  @ApiProperty()
  readonly shepherd: string;

  @IsArray()
  @IsNotEmpty()
  readonly users: string[];
}

export class UpdateChurchDto extends PartialType(
  OmitType(CreateChurchDto, ['users']),
) {}

export class AddUserToChurchDto {
  @IsArray()
  @IsNotEmpty()
  readonly usersIds: string[];
}
