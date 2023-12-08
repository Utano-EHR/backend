import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ChronicConditionSeed {
  constructor(private readonly db: DatabaseService) {}
  async seed() {
    const filePath = path.join(
      __dirname,
      '../../src/db_json/chronic_conditions.json',
    );
    const chronic_conditions = JSON.parse(
      fs.readFileSync(filePath, 'utf8'),
    );

    for (const condition of chronic_conditions) {
      const slug = condition.toLowerCase().replace(/ /g, '-');
      await this.db.chronicCondition.create({
        data: {
          name: condition,
          slug,
        },
      });
    }

    console.log('Chronic Conditions data seeded successfully');
  }
}
