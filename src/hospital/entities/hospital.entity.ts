import { CoreEntity } from 'src/common/entities';

export class Hospital extends CoreEntity {
  name: string;
  slug: string;
  longitude: number;
  latitude: number;
  street_address: string;
  phone: string;
  email: string;
  city_id: number;
}
