import { Test, TestingModule } from '@nestjs/testing';
import { ChronicconditionService } from './chroniccondition.service';

describe('ChronicconditionService', () => {
  let service: ChronicconditionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChronicconditionService],
    }).compile();

    service = module.get<ChronicconditionService>(ChronicconditionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
