import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsGateway } from './transactions.gateway';
import { TransactionsService } from './transactions.service';
import { Paciente } from '../entities/paciente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente])],
  providers: [TransactionsGateway, TransactionsService],
})
export class TransactionsModule {}
