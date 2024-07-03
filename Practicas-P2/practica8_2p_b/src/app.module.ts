import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import ConfigService from '@nestjs/config'

import { Paciente } from './entities/paciente.entity';
import { TipoExamen } from './entities/tipo-examen.entity';
import { Resultado } from './entities/resultado.entity';

import { TransactionsModule } from './transactions/transactions.module';



@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        entities: [Paciente, TipoExamen, Resultado],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    TransactionsModule
  ],
})
export class AppModule {}
