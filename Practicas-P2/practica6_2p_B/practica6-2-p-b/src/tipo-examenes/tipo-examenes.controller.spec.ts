import { Test, TestingModule } from '@nestjs/testing';
import { TipoExamenesController } from './tipo-examenes.controller';
import { TipoExamenesService } from './tipo-examenes.service';

describe('TipoExamenesController', () => {
  let controller: TipoExamenesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoExamenesController],
      providers: [TipoExamenesService],
    }).compile();

    controller = module.get<TipoExamenesController>(TipoExamenesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
