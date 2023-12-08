import { Patient } from '@prisma/client';
import { CoreEntity } from 'src/common/entities';

export class Insurance extends CoreEntity {
  name: string;
  slug: string;
  phone: string;
  email: string;
  url: string;
  patients: Patient[];
}
