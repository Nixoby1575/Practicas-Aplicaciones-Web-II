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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoExamen = void 0;
const typeorm_1 = require("typeorm");
const resultado_entity_1 = require("../../resultados/entities/resultado.entity");
let TipoExamen = class TipoExamen {
};
exports.TipoExamen = TipoExamen;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TipoExamen.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TipoExamen.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TipoExamen.prototype, "indicaciones", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'Activo' }),
    __metadata("design:type", String)
], TipoExamen.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => resultado_entity_1.Resultado, resultado => resultado.tipoExamen),
    __metadata("design:type", Array)
], TipoExamen.prototype, "resultados", void 0);
exports.TipoExamen = TipoExamen = __decorate([
    (0, typeorm_1.Entity)()
], TipoExamen);
//# sourceMappingURL=tipo-examene.entity.js.map