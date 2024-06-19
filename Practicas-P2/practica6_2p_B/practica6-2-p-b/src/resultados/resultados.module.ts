import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resultado } from './entities/resultado.entity';
import { ResultadosService } from './resultados.service';
import { ResultadosController } from './resultados.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Resultado])],
  providers: [ResultadosService],
  controllers: [ResultadosController],
})
export class ResultadosModule {}
