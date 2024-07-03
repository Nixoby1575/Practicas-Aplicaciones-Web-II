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
exports.Resultado = void 0;
const typeorm_1 = require("typeorm");
const paciente_entity_1 = require("../../paciente/entities/paciente.entity");
const tipo_examan_entity_1 = require("../../tipo-examen/entities/tipo-examan.entity");
let Resultado = class Resultado {
};
exports.Resultado = Resultado;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Resultado.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paciente_entity_1.Paciente, paciente => paciente.resultados),
    __metadata("design:type", paciente_entity_1.Paciente)
], Resultado.prototype, "paciente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipo_examan_entity_1.TipoExamen, tipoExamen => tipoExamen.resultados),
    __metadata("design:type", tipo_examan_entity_1.TipoExamen)
], Resultado.prototype, "tipoExamen", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Resultado.prototype, "resultado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Resultado.prototype, "valorPagado", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resultado.prototype, "observaciones", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'Activo' }),
    __metadata("design:type", String)
], Resultado.prototype, "estado", void 0);
exports.Resultado = Resultado = __decorate([
    (0, typeorm_1.Entity)()
], Resultado);
//# sourceMappingURL=resultado.entity.js.map