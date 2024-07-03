"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const transactions_service_1 = require("./transactions.service");
const create_transaction_dto_1 = require("./dto/create-transaction.dto");
let TransactionsGateway = class TransactionsGateway {
    constructor(transactionsService) {
        this.transactionsService = transactionsService;
        this.users = new Map();
    }
    async handleAddTransaction(createTransactionDto, client) {
        const transaction = await this.transactionsService.create(createTransactionDto);
        this.server.emit('transaction-added', transaction);
        return transaction;
    }
    async handleGetActiveTransactions(client) {
        const transactions = await this.transactionsService.findAllActive();
        client.emit('active-transactions', transactions);
    }
    handleConnection(client) {
        const userId = parseInt(client.handshake.query.userId);
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
    handleDisconnect(client) {
        const userId = parseInt(client.handshake.query.userId);
        const userConnections = this.users.get(userId);
        if (userConnections) {
            userConnections.delete(client.id);
            if (userConnections.size === 0) {
                this.users.delete(userId);
            }
        }
    }
};
exports.TransactionsGateway = TransactionsGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], TransactionsGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('add-transaction'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transaction_dto_1.CreateTransactionDto, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], TransactionsGateway.prototype, "handleAddTransaction", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('get-active-transactions'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], TransactionsGateway.prototype, "handleGetActiveTransactions", null);
exports.TransactionsGateway = TransactionsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true }),
    __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
], TransactionsGateway);
//# sourceMappingURL=transactions.gateway.js.map