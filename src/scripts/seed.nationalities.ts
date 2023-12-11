import { fs, path, Injectable, DatabaseService } from './index';

@Injectable()
export class NationalitySeed {
  constructor(private readonly db: DatabaseService) {}
  async seed() {
    const filePath = path.join(
      __dirname,
      '../../src/db_json/nationalities.json',
    );
    const nationalities = JSON.parse(
      fs.readFileSync(filePath, 'utf8'),
    );

    for (const country of nationalities) {
      await this.db.nationality.create({
        data: {
          name: country,
          slug: country.toLowerCase().replace(/ /g, '-'),
        },
      });
    }

    console.log('Nationalities data seeded successfully');
  }
}
