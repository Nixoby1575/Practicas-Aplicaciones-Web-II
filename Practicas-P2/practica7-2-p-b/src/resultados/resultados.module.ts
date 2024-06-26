import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultadosService } from './resultados.service';
import { ResultadosResolver } from './resultados.resolver';
import { Resultado } from './entities/resultado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Resultado])],
  providers: [ResultadosService, ResultadosResolver],
})
export class ResultadosModule {}
