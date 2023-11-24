import { Hospital } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateDoctorDto {
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
  hospital: Hospital;

  @IsNotEmpty()
  @IsString()
  speciality: string;
}
