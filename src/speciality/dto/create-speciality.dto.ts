import { OmitType } from '@nestjs/mapped-types';
import { Speciality } from '../entities/speciality.entity';

export class CreateSpecialityDto extends OmitType(Speciality, [
  'doctors',
]) {}
