import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { Paciente } from './pacientes/entities/paciente.entity';
import { TipoExamen } from './tipos-examen/entities/tipos-examen.entity';
import { Resultado } from './resultados/entities/resultado.entity';

import { PacientesModule } from './pacientes/pacientes.module';
import { TiposExamenModule } from './tipos-examen/tipos-examen.module';
import { ResultadosModule } from './resultados/resultados.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        entities: [Paciente, TipoExamen, Resultado],
        synchronize: true, // Solo para desarrollo, no usar en producción
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    PacientesModule,
    TiposExamenModule,
    ResultadosModule,
  ],
})
export class AppModule {}
