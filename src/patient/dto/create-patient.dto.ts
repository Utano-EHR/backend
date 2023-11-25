import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsDate,
  IsArray,
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
  @IsDate()
  date_of_birth: Date;

  @IsNotEmpty()
  @IsString()
  national_id: string;

  @IsOptional()
  @IsString()
  mother_id: string;

  @IsOptional()
  @IsString()
  father_id: string;

  @IsOptional()
  @IsArray()
  allergies: string[];

  @IsOptional()
  @IsArray()
  chronic_conditions: string[];

  @IsOptional()
  @IsArray()
  insurance_id: string;
}
