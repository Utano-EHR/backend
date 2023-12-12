import { PickType } from '@nestjs/mapped-types';
import { Discharge } from '../entities/discharge.entity';

export class CreateDischargeDto extends PickType(Discharge, [
  'date',
  'form_id',
  'admission_id',
]) {}
