import { CoreEntity } from 'src/common/entities';
import { Patient } from 'src/patient/entities/patient.entity';

export class Chroniccondition extends CoreEntity {
  name: string;
  slug: string;
  patients: Patient[];
}
