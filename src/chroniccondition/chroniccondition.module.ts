import { Module } from '@nestjs/common';
import { ChronicconditionService } from './chroniccondition.service';
import { ChronicconditionController } from './chroniccondition.controller';

@Module({
  controllers: [ChronicconditionController],
  providers: [ChronicconditionService],
})
export class ChronicconditionModule {}
