import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DischargeService } from './discharge.service';
import { CreateDischargeDto } from './dto/create-discharge.dto';
import { UpdateDischargeDto } from './dto/update-discharge.dto';

@Controller('discharge')
export class DischargeController {
  constructor(private readonly dischargeService: DischargeService) {}

  @Post()
  create(@Body() createDischargeDto: CreateDischargeDto) {
    return this.dischargeService.create(createDischargeDto);
  }

  @Get()
  findAll() {
    return this.dischargeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dischargeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDischargeDto: UpdateDischargeDto,
  ) {
    return this.dischargeService.update(+id, updateDischargeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dischargeService.remove(+id);
  }
}
