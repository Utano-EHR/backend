import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChronicconditionService } from './chroniccondition.service';
import { CreateChronicconditionDto } from './dto/create-chroniccondition.dto';
import { UpdateChronicconditionDto } from './dto/update-chroniccondition.dto';

@Controller('chroniccondition')
export class ChronicconditionController {
  constructor(
    private readonly chronicconditionService: ChronicconditionService,
  ) {}

  @Post()
  create(
    @Body() createChronicconditionDto: CreateChronicconditionDto,
  ) {
    return this.chronicconditionService.create(
      createChronicconditionDto,
    );
  }

  @Get()
  findAll() {
    return this.chronicconditionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chronicconditionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChronicconditionDto: UpdateChronicconditionDto,
  ) {
    return this.chronicconditionService.update(
      +id,
      updateChronicconditionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chronicconditionService.remove(+id);
  }
}
