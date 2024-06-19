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
exports.ResultadosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const resultado_entity_1 = require("./entities/resultado.entity");
let ResultadosService = class ResultadosService {
    constructor(resultadosRepository) {
        this.resultadosRepository = resultadosRepository;
    }
    findAll() {
        return this.resultadosRepository.find();
    }
    async findOne(id) {
        const resultado = await this.resultadosRepository.findOne({ where: { id } });
        if (!resultado) {
            throw new common_1.NotFoundException(`Resultado with ID ${id} not found`);
        }
        return resultado;
    }
    create(createResultadoDto) {
        const resultado = this.resultadosRepository.create(createResultadoDto);
        return this.resultadosRepository.save(resultado);
    }
    async update(id, updateResultadoDto) {
        await this.resultadosRepository.update(id, updateResultadoDto);
        const updatedResultado = await this.findOne(id);
        return updatedResultado;
    }
    async remove(id) {
        const resultado = await this.findOne(id);
        await this.resultadosRepository.update(id, { estado: 'Inactivo' });
    }
    async recover(id) {
        await this.resultadosRepository.update(id, { estado: 'Activo' });
    }
};
exports.ResultadosService = ResultadosService;
exports.ResultadosService = ResultadosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(resultado_entity_1.Resultado)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ResultadosService);
//# sourceMappingURL=resultados.service.js.map