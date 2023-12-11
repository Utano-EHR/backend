import { fs, path, Injectable, DatabaseService } from './index';

@Injectable()
export class HospitalSeed {
  constructor(private readonly db: DatabaseService) {}
  async seed() {
    const filePath = path.join(
      __dirname,
      '../../src/db_json/hospitals.json',
    );
    const hospitals = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    for (const hospital of hospitals) {
      const { city_id, ...rest } = hospital;
      await this.db.hospital.create({
        data: {
          ...rest,
          slug: hospital.name.toLowerCase().replace(/ /g, '-'),
          city: {
            connect: {
              id: city_id,
            },
          },
        },
      });
    }

    console.log('Hospitals data seeded successfully');
  }
}
