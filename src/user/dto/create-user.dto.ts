import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { USER_ROLE } from '@prisma/client';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  nationality: string;

  @IsNotEmpty()
  @IsString()
  role: USER_ROLE;

  @IsOptional()
  @IsString()
  national_id: string;

  @IsOptional()
  @IsNumber()
  hospital_id: number;

  @IsOptional()
  @IsNumber()
  speciality_id: number;
}
