import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class InsuranceSeed {
  constructor(private readonly db: DatabaseService) {}
  async seed() {
    const filePath = path.join(
      __dirname,
      '../../src/db_json/insurance.json',
    );
    const insurances = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    for (const insurance of insurances) {
      await this.db.insurance.create({
        data: {
          ...insurance,
          slug: insurance.name.toLowerCase().replace(/ /g, '-'),
        },
      });
    }

    console.log('Insurance data seeded successfully');
  }
}
