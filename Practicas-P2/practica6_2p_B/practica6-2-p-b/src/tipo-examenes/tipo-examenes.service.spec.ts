import { Test, TestingModule } from '@nestjs/testing';
import { TipoExamenesService } from './tipo-examenes.service';

describe('TipoExamenesService', () => {
  let service: TipoExamenesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoExamenesService],
    }).compile();

    service = module.get<TipoExamenesService>(TipoExamenesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
