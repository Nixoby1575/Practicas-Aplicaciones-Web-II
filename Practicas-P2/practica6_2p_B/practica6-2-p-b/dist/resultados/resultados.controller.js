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
exports.ResultadosController = void 0;
const common_1 = require("@nestjs/common");
const resultados_service_1 = require("./resultados.service");
const create_resultado_dto_1 = require("./dto/create-resultado.dto");
const update_resultado_dto_1 = require("./dto/update-resultado.dto");
let ResultadosController = class ResultadosController {
    constructor(resultadosService) {
        this.resultadosService = resultadosService;
    }
    findAll() {
        return this.resultadosService.findAll();
    }
    findOne(id) {
        return this.resultadosService.findOne(+id);
    }
    create(createResultadoDto) {
        return this.resultadosService.create(createResultadoDto);
    }
    update(id, updateResultadoDto) {
        return this.resultadosService.update(+id, updateResultadoDto);
    }
    remove(id) {
        return this.resultadosService.remove(+id);
    }
    recover(id) {
        return this.resultadosService.recover(+id);
    }
};
exports.ResultadosController = ResultadosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ResultadosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResultadosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_resultado_dto_1.CreateResultadoDto]),
    __metadata("design:returntype", void 0)
], ResultadosController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_resultado_dto_1.UpdateResultadoDto]),
    __metadata("design:returntype", void 0)
], ResultadosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResultadosController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)('recover/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResultadosController.prototype, "recover", null);
exports.ResultadosController = ResultadosController = __decorate([
    (0, common_1.Controller)('resultados'),
    __metadata("design:paramtypes", [resultados_service_1.ResultadosService])
], ResultadosController);
//# sourceMappingURL=resultados.controller.js.map