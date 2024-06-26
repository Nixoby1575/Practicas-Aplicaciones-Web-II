import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposExamenService } from './tipos-examen.service';
import { TiposExamenResolver } from './tipos-examen.resolver';
import { TipoExamen } from './entities/tipos-examen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoExamen])],
  providers: [TiposExamenService, TiposExamenResolver],
})
export class TiposExamenModule {}
