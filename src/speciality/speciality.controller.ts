import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SpecialityService } from './speciality.service';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';
import { CreateSpecialityDto } from './dto/create-speciality.dto';

@Controller('speciality')
export class SpecialityController {
  constructor(
    private readonly specialityService: SpecialityService,
  ) {}

  @Post()
  create(@Body() dto: CreateSpecialityDto) {
    return this.specialityService.create(dto);
  }

  @Get()
  findAll() {
    return this.specialityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.specialityService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateSpecialityDto: UpdateSpecialityDto,
  ) {
    return this.specialityService.update(+id, updateSpecialityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.specialityService.remove(+id);
  }
}
