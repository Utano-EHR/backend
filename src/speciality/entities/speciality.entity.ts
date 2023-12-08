import { User } from '@prisma/client';
import { CoreEntity } from 'src/common/entities';

export class Speciality extends CoreEntity {
  name: string;
  slug: string;
  doctors: User[];
}
