import { City, Consultation, User } from '@prisma/client';
import { CoreEntity } from 'src/common/entities';

export class Hospital extends CoreEntity {
  name: string;
  slug: string;
  longitude?: number;
  latitude?: number;
  street_address: string;
  phone: string;
  email: string;
  city_id: number;
  city?: City;
  employees: User[];
  consultations: Consultation[];
}
