import { Test, TestingModule } from '@nestjs/testing';
import { ChronicconditionController } from './chroniccondition.controller';
import { ChronicconditionService } from './chroniccondition.service';

describe('ChronicconditionController', () => {
  let controller: ChronicconditionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChronicconditionController],
      providers: [ChronicconditionService],
    }).compile();

    controller = module.get<ChronicconditionController>(ChronicconditionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
