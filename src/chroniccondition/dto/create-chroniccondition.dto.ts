import { PickType } from '@nestjs/mapped-types';
import { Chroniccondition } from '../entities/chroniccondition.entity';

export class CreateChronicconditionDto extends PickType(
  Chroniccondition,
  ['name'],
) {}
