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
exports.PacienteGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const paciente_service_1 = require("./paciente.service");
const create_paciente_dto_1 = require("./dto/create-paciente.dto");
const update_paciente_dto_1 = require("./dto/update-paciente.dto");
let PacienteGateway = class PacienteGateway {
    constructor(pacienteService) {
        this.pacienteService = pacienteService;
    }
    create(createPacienteDto) {
        return this.pacienteService.create(createPacienteDto);
    }
    findAll() {
        return this.pacienteService.findAll();
    }
    findOne(id) {
        return this.pacienteService.findOne(id);
    }
    update(updatePacienteDto) {
        return this.pacienteService.update(updatePacienteDto.id, updatePacienteDto);
    }
    remove(id) {
        return this.pacienteService.remove(id);
    }
};
exports.PacienteGateway = PacienteGateway;
__decorate([
    (0, websockets_1.SubscribeMessage)('createPaciente'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_paciente_dto_1.CreatePacienteDto]),
    __metadata("design:returntype", void 0)
], PacienteGateway.prototype, "create", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findAllPaciente'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PacienteGateway.prototype, "findAll", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findOnePaciente'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PacienteGateway.prototype, "findOne", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('updatePaciente'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_paciente_dto_1.UpdatePacienteDto]),
    __metadata("design:returntype", void 0)
], PacienteGateway.prototype, "update", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('removePaciente'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PacienteGateway.prototype, "remove", null);
exports.PacienteGateway = PacienteGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    __metadata("design:paramtypes", [paciente_service_1.PacienteService])
], PacienteGateway);
//# sourceMappingURL=paciente.gateway.js.map