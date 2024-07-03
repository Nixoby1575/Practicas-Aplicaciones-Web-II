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
exports.TipoExamenGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const tipo_examen_service_1 = require("./tipo-examen.service");
const create_tipo_examan_dto_1 = require("./dto/create-tipo-examan.dto");
const update_tipo_examan_dto_1 = require("./dto/update-tipo-examan.dto");
let TipoExamenGateway = class TipoExamenGateway {
    constructor(tipoExamenService) {
        this.tipoExamenService = tipoExamenService;
    }
    create(createTipoExamanDto) {
        return this.tipoExamenService.create(createTipoExamanDto);
    }
    findAll() {
        return this.tipoExamenService.findAll();
    }
    findOne(id) {
        return this.tipoExamenService.findOne(id);
    }
    update(updateTipoExamanDto) {
        return this.tipoExamenService.update(updateTipoExamanDto.id, updateTipoExamanDto);
    }
    remove(id) {
        return this.tipoExamenService.remove(id);
    }
};
exports.TipoExamenGateway = TipoExamenGateway;
__decorate([
    (0, websockets_1.SubscribeMessage)('createTipoExaman'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipo_examan_dto_1.CreateTipoExamanDto]),
    __metadata("design:returntype", void 0)
], TipoExamenGateway.prototype, "create", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findAllTipoExamen'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipoExamenGateway.prototype, "findAll", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findOneTipoExaman'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TipoExamenGateway.prototype, "findOne", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('updateTipoExaman'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_tipo_examan_dto_1.UpdateTipoExamanDto]),
    __metadata("design:returntype", void 0)
], TipoExamenGateway.prototype, "update", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('removeTipoExaman'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TipoExamenGateway.prototype, "remove", null);
exports.TipoExamenGateway = TipoExamenGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    __metadata("design:paramtypes", [tipo_examen_service_1.TipoExamenService])
], TipoExamenGateway);
//# sourceMappingURL=tipo-examen.gateway.js.map