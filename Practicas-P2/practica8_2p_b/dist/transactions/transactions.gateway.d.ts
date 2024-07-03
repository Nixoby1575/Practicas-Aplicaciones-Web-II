import { Server, Socket } from 'socket.io';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
export declare class TransactionsGateway {
    private readonly transactionsService;
    server: Server;
    private users;
    constructor(transactionsService: TransactionsService);
    handleAddTransaction(createTransactionDto: CreateTransactionDto, client: Socket): Promise<Nota>;
    handleGetActiveTransactions(client: Socket): Promise<void>;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
}
