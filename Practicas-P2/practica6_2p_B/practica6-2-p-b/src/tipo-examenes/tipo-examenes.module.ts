import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoExamen } from './entities/tipo-examene.entity';
import { TipoExamenesService } from './tipo-examenes.service';
import { TipoExamenesController } from './tipo-examenes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TipoExamen])],
  providers: [TipoExamenesService],
  controllers: [TipoExamenesController],
})
export class TipoExamenesModule {}