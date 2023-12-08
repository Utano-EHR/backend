import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CitySeed {
  constructor(private readonly db: DatabaseService) {}
  async seed() {
    const filePath = path.join(
      __dirname,
      '../../src/db_json/cities.json',
    );
    const cities = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    for (const city of cities) {
      const slug = city.city.toLowerCase().replace(/ /g, '-');
      await this.db.city.create({
        data: {
          name: city.city,
          slug,
          province: {
            connect: {
              slug: city.admin_name.toLowerCase().replace(/ /g, '-'),
            },
          },
        },
      });
    }

    console.log('City data seeded successfully');
  }
}
