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
exports.TipoExamenesController = void 0;
const common_1 = require("@nestjs/common");
const tipo_examenes_service_1 = require("./tipo-examenes.service");
const create_tipo_examene_dto_1 = require("./dto/create-tipo-examene.dto");
const update_tipo_examene_dto_1 = require("./dto/update-tipo-examene.dto");
let TipoExamenesController = class TipoExamenesController {
    constructor(tipoExamenesService) {
        this.tipoExamenesService = tipoExamenesService;
    }
    findAll() {
        return this.tipoExamenesService.findAll();
    }
    findOne(id) {
        return this.tipoExamenesService.findOne(+id);
    }
    create(createTipoExamenDto) {
        return this.tipoExamenesService.create(createTipoExamenDto);
    }
    update(id, updateTipoExamenDto) {
        return this.tipoExamenesService.update(+id, updateTipoExamenDto);
    }
    remove(id) {
        return this.tipoExamenesService.remove(+id);
    }
    recover(id) {
        return this.tipoExamenesService.recover(+id);
    }
};
exports.TipoExamenesController = TipoExamenesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipoExamenesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipoExamenesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipo_examene_dto_1.CreateTipoExameneDto]),
    __metadata("design:returntype", void 0)
], TipoExamenesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tipo_examene_dto_1.UpdateTipoExameneDto]),
    __metadata("design:returntype", void 0)
], TipoExamenesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipoExamenesController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)('recover/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipoExamenesController.prototype, "recover", null);
exports.TipoExamenesController = TipoExamenesController = __decorate([
    (0, common_1.Controller)('tipo-examenes'),
    __metadata("design:paramtypes", [tipo_examenes_service_1.TipoExamenesService])
], TipoExamenesController);
//# sourceMappingURL=tipo-examenes.controller.js.map