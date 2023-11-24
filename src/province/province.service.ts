import { Injectable } from '@nestjs/common';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { DatabaseService } from '../database/database.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProvinceService {
  constructor(private readonly db: DatabaseService) {}
  async create() {
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

    return {
      success: true,
      message: 'All provinces created successfully',
    };
  }

  findAll() {
    return `This action returns all province`;
  }

  findOne(id: number) {
    return `This action returns a #${id} province`;
  }

  update(id: number, updateProvinceDto: UpdateProvinceDto) {
    return `This action updates a #${id} province`;
  }

  remove(id: number) {
    return `This action removes a #${id} province`;
  }
}
