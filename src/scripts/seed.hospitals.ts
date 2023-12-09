import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import * as fs from 'fs';
import * as path from 'path';

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
      await this.db.insurance.create({
        data: {
          ...hospital,
          slug: hospital.name.toLowerCase().replace(/ /g, '-'),
        },
      });
    }

    console.log('Hospital data seeded successfully');
  }
}
