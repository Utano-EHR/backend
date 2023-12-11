import { fs, path, Injectable, DatabaseService } from './index';

@Injectable()
export class ProvinceSeed {
  constructor(private readonly db: DatabaseService) {}
  async seed() {
    const filePath = path.join(
      __dirname,
      '../../src/db_json/provinces.json',
    );
    const provinces = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    for (const province of provinces) {
      await this.db.province.create({
        data: {
          name: province,
          slug: province.toLowerCase().replace(/ /g, '-'),
        },
      });
    }

    console.log('Provinces data seeded successfully');
  }
}
