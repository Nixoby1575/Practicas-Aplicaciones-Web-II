import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@WebSocketGateway({ cors: true })
export class TransactionsGateway {
  @WebSocketServer()
  server: Server;

  private users: Map<number, Set<string>> = new Map();

  constructor(private readonly transactionsService: TransactionsService) {}

  @SubscribeMessage('add-transaction')
  async handleAddTransaction(@MessageBody() createTransactionDto: CreateTransactionDto, @ConnectedSocket() client: Socket) {
    const transaction = await this.transactionsService.create(createTransactionDto);
    this.server.emit('transaction-added', transaction);
    return transaction;
  }

  @SubscribeMessage('get-active-transactions')
  async handleGetActiveTransactions(@ConnectedSocket() client: Socket) {
    const transactions = await this.transactionsService.findAllActive();
    client.emit('active-transactions', transactions);
  }

  handleConnection(client: Socket) {
    const userId = parseInt(client.handshake.query.userId as string);
    if (!this.users.has(userId)) {
      this.users.set(userId, new Set());
    }

    const userConnections = this.users.get(userId);
    if (userConnections.size >= 3) {
      client.disconnect(true);
      return;
    }

    userConnections.add(client.id);
  }

  handleDisconnect(client: Socket) {
    const userId = parseInt(client.handshake.query.userId as string);
    const userConnections = this.users.get(userId);
    if (userConnections) {
      userConnections.delete(client.id);
      if (userConnections.size === 0) {
        this.users.delete(userId);
      }
    }
  }
}
