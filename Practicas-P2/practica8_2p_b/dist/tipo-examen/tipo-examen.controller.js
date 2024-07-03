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
exports.TipoExamenController = void 0;
const common_1 = require("@nestjs/common");
const tipo_examen_service_1 = require("./tipo-examen.service");
const create_tipo_examan_dto_1 = require("./dto/create-tipo-examan.dto");
const update_tipo_examan_dto_1 = require("./dto/update-tipo-examan.dto");
let TipoExamenController = class TipoExamenController {
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
        return this.tipoExamenService.findOne(+id);
    }
    update(id, updateTipoExamanDto) {
        return this.tipoExamenService.update(+id, updateTipoExamanDto);
    }
    remove(id) {
        return this.tipoExamenService.remove(+id);
    }
};
exports.TipoExamenController = TipoExamenController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipo_examan_dto_1.CreateTipoExamanDto]),
    __metadata("design:returntype", void 0)
], TipoExamenController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipoExamenController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipoExamenController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tipo_examan_dto_1.UpdateTipoExamanDto]),
    __metadata("design:returntype", void 0)
], TipoExamenController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipoExamenController.prototype, "remove", null);
exports.TipoExamenController = TipoExamenController = __decorate([
    (0, common_1.Controller)('tipo-examen'),
    __metadata("design:paramtypes", [tipo_examen_service_1.TipoExamenService])
], TipoExamenController);
//# sourceMappingURL=tipo-examen.controller.js.map