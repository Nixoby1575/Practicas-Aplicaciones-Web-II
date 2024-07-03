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
exports.PacienteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const paciente_entity_1 = require("./entities/paciente.entity");
let PacienteService = class PacienteService {
    constructor(pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }
    async create(createPacienteDto) {
        const newPaciente = this.pacienteRepository.create(createPacienteDto);
        return this.pacienteRepository.save(newPaciente);
    }
    async findAll() {
        return this.pacienteRepository.find();
    }
    async findOne(id) {
        const paciente = await this.pacienteRepository.findOne({ where: { id } });
        if (!paciente) {
            throw new common_1.NotFoundException(`Paciente with ID ${id} not found`);
        }
        return paciente;
    }
    async update(id, updatePacienteDto) {
        await this.pacienteRepository.update(id, updatePacienteDto);
        const updatedPaciente = await this.pacienteRepository.findOne({ where: { id } });
        if (!updatedPaciente) {
            throw new common_1.NotFoundException(`Paciente with ID ${id} not found`);
        }
        return updatedPaciente;
    }
    async remove(id) {
        const paciente = await this.findOne(id);
        await this.pacienteRepository.update(id, { estado: 'Inactivo' });
    }
};
exports.PacienteService = PacienteService;
exports.PacienteService = PacienteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(paciente_entity_1.Paciente)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PacienteService);
//# sourceMappingURL=paciente.service.js.map