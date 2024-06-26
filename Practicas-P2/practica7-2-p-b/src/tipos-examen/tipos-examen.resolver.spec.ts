import { Test, TestingModule } from '@nestjs/testing';
import { TiposExamenResolver } from './tipos-examen.resolver';
import { TiposExamenService } from './tipos-examen.service';

describe('TiposExamenResolver', () => {
  let resolver: TiposExamenResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposExamenResolver, TiposExamenService],
    }).compile();

    resolver = module.get<TiposExamenResolver>(TiposExamenResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
