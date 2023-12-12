import { Attachment } from '@prisma/client';
import { Admission } from 'src/admission/entities/admission.entity';
import { CoreEntity } from 'src/common/entities';

export class Discharge extends CoreEntity {
  date: Date;
  form_id: number;
  form: Attachment;
  admission_id: number;
  admission: Admission;
}
