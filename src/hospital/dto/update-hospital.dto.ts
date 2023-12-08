import { OmitType } from '@nestjs/mapped-types';
import { Hospital } from '../entities/hospital.entity';

export class UpdateHospitalDto extends OmitType(Hospital, [
  'city',
  'employees',
  'consultations',
  'created_at',
  'updated_at',
]) {}
