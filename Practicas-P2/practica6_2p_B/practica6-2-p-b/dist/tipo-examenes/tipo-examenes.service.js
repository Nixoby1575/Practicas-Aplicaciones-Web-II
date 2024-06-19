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
exports.TipoExamenesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tipo_examene_entity_1 = require("./entities/tipo-examene.entity");
let TipoExamenesService = class TipoExamenesService {
    constructor(tipoExamenesRepository) {
        this.tipoExamenesRepository = tipoExamenesRepository;
    }
    findAll() {
        return this.tipoExamenesRepository.find();
    }
    async findOne(id) {
        const tipoExamen = await this.tipoExamenesRepository.findOne({ where: { id } });
        if (!tipoExamen) {
            throw new common_1.NotFoundException(`TipoExamen with ID ${id} not found`);
        }
        return tipoExamen;
    }
    create(createTipoExamenDto) {
        const tipoExamen = this.tipoExamenesRepository.create(createTipoExamenDto);
        return this.tipoExamenesRepository.save(tipoExamen);
    }
    async update(id, updateTipoExamenDto) {
        await this.tipoExamenesRepository.update(id, updateTipoExamenDto);
        const updatedTipoExamen = await this.findOne(id);
        return updatedTipoExamen;
    }
    async remove(id) {
        const tipoExamen = await this.findOne(id);
        await this.tipoExamenesRepository.update(id, { estado: 'Inactivo' });
    }
    async recover(id) {
        await this.tipoExamenesRepository.update(id, { estado: 'Activo' });
    }
};
exports.TipoExamenesService = TipoExamenesService;
exports.TipoExamenesService = TipoExamenesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tipo_examene_entity_1.TipoExamen)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TipoExamenesService);
//# sourceMappingURL=tipo-examenes.service.js.map