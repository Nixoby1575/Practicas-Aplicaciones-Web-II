import { Repository } from 'typeorm';
import { Nota } from '../entities/nota.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
export declare class TransactionsService {
    private readonly notaRepository;
    constructor(notaRepository: Repository<Nota>);
    create(createTransactionDto: CreateTransactionDto): Promise<Nota>;
    findAllActive(): Promise<Nota[]>;
}
