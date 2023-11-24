import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateDoctorDto } from 'src/doctor/dto/create-doctor.dto';
import * as argon from 'argon2';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AuthService {
  constructor(private readonly db: DatabaseService) {}

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  async registerDoctor(dto: CreateDoctorDto) {
    dto.email = dto.email.toLowerCase();
    dto.password = await argon.hash(dto.password);

    const doctor = await this.db.doctor.create({
      data: dto,
    });

    return {
      success: true,
      message: 'Doctor registered successfully',
      data: doctor,
    };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
