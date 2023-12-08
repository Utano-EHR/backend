import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class SpecialitySeed {
  constructor(private readonly db: DatabaseService) {}
  async seed() {
    const filePath = path.join(
      __dirname,
      '../../src/db_json/specialties.json',
    );
    const specialities = JSON.parse(
      fs.readFileSync(filePath, 'utf8'),
    );

    for (const speciality of specialities) {
      await this.db.speciality.create({
        data: {
          name: speciality,
          slug: speciality.toLowerCase().replace(/ /g, '-'),
        },
      });
    }

    console.log('Specialities data seeded successfully');
  }
}
