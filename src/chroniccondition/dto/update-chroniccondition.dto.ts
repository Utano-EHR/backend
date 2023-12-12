import { PartialType } from '@nestjs/mapped-types';
import { CreateChronicconditionDto } from './create-chroniccondition.dto';

export class UpdateChronicconditionDto extends PartialType(
  CreateChronicconditionDto,
) {}
