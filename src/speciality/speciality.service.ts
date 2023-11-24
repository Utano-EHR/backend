import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class SpecialityService {
  constructor(private readonly db: DatabaseService) {}

  async create() {
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
    return {
      success: true,
      message: 'All specilities created successfully',
    };
  }

  findAll() {
    return `This action returns all speciality`;
  }
}
