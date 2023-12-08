import { OmitType } from '@nestjs/mapped-types';
import { Insurance } from '../entities/insurance.entity';
export class UpdateInsuranceDto extends OmitType(Insurance, [
  'patients',
  'created_at',
  'updated_at',
]) {}
