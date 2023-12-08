import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsArray,
  IsNumber,
} from 'class-validator';

export class CreatePatientDto {
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  date_of_birth: Date;

  @IsNotEmpty()
  @IsString()
  national_id: string;

  @IsOptional()
  @IsString()
  mother_national_id: string;

  @IsOptional()
  @IsString()
  father_national_id: string;

  @IsOptional()
  @IsArray()
  allergies: string[];

  @IsOptional()
  @IsNumber()
  insurance_id: number;
}
