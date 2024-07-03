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
exports.ResultadoGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const resultado_service_1 = require("./resultado.service");
const create_resultado_dto_1 = require("./dto/create-resultado.dto");
const update_resultado_dto_1 = require("./dto/update-resultado.dto");
let ResultadoGateway = class ResultadoGateway {
    constructor(resultadoService) {
        this.resultadoService = resultadoService;
    }
    create(createResultadoDto) {
        return this.resultadoService.create(createResultadoDto);
    }
    findAll() {
        return this.resultadoService.findAll();
    }
    findOne(id) {
        return this.resultadoService.findOne(id);
    }
    update(updateResultadoDto) {
        return this.resultadoService.update(updateResultadoDto.id, updateResultadoDto);
    }
    remove(id) {
        return this.resultadoService.remove(id);
    }
};
exports.ResultadoGateway = ResultadoGateway;
__decorate([
    (0, websockets_1.SubscribeMessage)('createResultado'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_resultado_dto_1.CreateResultadoDto]),
    __metadata("design:returntype", void 0)
], ResultadoGateway.prototype, "create", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findAllResultado'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ResultadoGateway.prototype, "findAll", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findOneResultado'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ResultadoGateway.prototype, "findOne", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('updateResultado'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_resultado_dto_1.UpdateResultadoDto]),
    __metadata("design:returntype", void 0)
], ResultadoGateway.prototype, "update", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('removeResultado'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ResultadoGateway.prototype, "remove", null);
exports.ResultadoGateway = ResultadoGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    __metadata("design:paramtypes", [resultado_service_1.ResultadoService])
], ResultadoGateway);
//# sourceMappingURL=resultado.gateway.js.map