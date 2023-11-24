import { Controller, Get, Post } from '@nestjs/common';
import { SpecialityService } from './speciality.service';

@Controller('speciality')
export class SpecialityController {
  constructor(
    private readonly specialityService: SpecialityService,
  ) {}

  @Post()
  create() {
    return this.specialityService.create();
  }

  @Get()
  findAll() {
    return this.specialityService.findAll();
  }
}
