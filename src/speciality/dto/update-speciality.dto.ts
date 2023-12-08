import { OmitType } from '@nestjs/mapped-types';
import { Speciality } from '../entities/speciality.entity';

export class UpdateSpecialityDto extends OmitType(Speciality, [
  'doctors',
  'created_at',
  'updated_at',
]) {}
