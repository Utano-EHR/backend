import { OmitType } from '@nestjs/mapped-types';
import { User } from '../entities/user.entity';

export class UpdateUserDto extends OmitType(User, [
  'hospital',
  'speciality',
  'consultations',
  'appointments',
  'prescriptions',
  'created_at',
  'updated_at',
]) {}
