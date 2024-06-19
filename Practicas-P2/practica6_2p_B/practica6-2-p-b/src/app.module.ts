import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacientesModule } from './pacientes/pacientes.module';
import { TipoExamenesModule } from './tipo-examenes/tipo-examenes.module';
import { ResultadosModule } from './resultados/resultados.module';
import { Paciente } from './pacientes/entities/paciente.entity';
import { TipoExamen } from './tipo-examenes/entities/tipo-examene.entity';
import { Resultado } from './resultados/entities/resultado.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        entities: [Paciente, TipoExamen, Resultado],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    PacientesModule,
    TipoExamenesModule,
    ResultadosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}