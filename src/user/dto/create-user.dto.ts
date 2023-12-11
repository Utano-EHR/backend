import { PickType } from '@nestjs/mapped-types';
import { User } from '../entities/user.entity';

export class CreateUserDto extends PickType(User, [
  'firstname',
  'lastname',
  'email',
  'password',
  'national_identity',
  'nation_id',
  'nationality',
  'role_id',
  'hospital_id',
  'speciality_id',
]) {}
