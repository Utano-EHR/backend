import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { DatabaseService } from '../database/database.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CityService {
  constructor(private readonly db: DatabaseService) {}
  async create() {
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

    return {
      success: true,
      message: 'All cities created successfully',
    };
  }

  findAll() {
    return `This action returns all city`;
  }

  findOne(id: number) {
    return `This action returns a #${id} city`;
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`;
  }

  remove(id: number) {
    return `This action removes a #${id} city`;
  }
}
