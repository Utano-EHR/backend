import { Hospital } from '@prisma/client';
import { CoreEntity } from 'src/common/entities';

export class Receptionist extends CoreEntity {
  firstname: string;
  lastname: string;
  email: string;
  password?: string;
  nationality: string;
  date_of_birth: Date | string;
  national_id: string;
  hospital_id?: string;
  hospital?: Hospital;
}
