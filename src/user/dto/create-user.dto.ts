import { PickType } from '@nestjs/mapped-types';
import { User } from '../entities/user.entity';

export class CreateUserDto extends PickType(User, [
  'firstname',
  'lastname',
  'email',
  'password',
  'national_id',
  'nationality',
  'role',
  'hospital_id',
  'speciality_id',
]) {}
