import { PickType } from '@nestjs/mapped-types';
import { Admission } from '../entities/admission.entity';

export class CreateAdmissionDto extends PickType(Admission, [
  'form_id',
  'patient_id',
  'reason',
]) {}
