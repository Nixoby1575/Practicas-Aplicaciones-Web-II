
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nota } from '../entities/nota.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Nota)
    private readonly notaRepository: Repository<Nota>,
  ) {}

  async create(createTransactionDto: CreateTransactionDto): Promise<Nota> {
    const nota = this.notaRepository.create(createTransactionDto);
    return this.notaRepository.save(nota);
  }

  async findAllActive(): Promise<Nota[]> {
    return this.notaRepository.find({ where: { estado: 'activo' } });
  }
}
