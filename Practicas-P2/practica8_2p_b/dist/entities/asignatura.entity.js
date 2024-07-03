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
exports.Asignatura = void 0;
const typeorm_1 = require("typeorm");
const nota_entity_1 = require("./nota.entity");
let Asignatura = class Asignatura {
};
exports.Asignatura = Asignatura;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Asignatura.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asignatura.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asignatura.prototype, "nivel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Asignatura.prototype, "numeroCreditos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => nota_entity_1.Nota, (nota) => nota.asignatura),
    __metadata("design:type", Array)
], Asignatura.prototype, "notas", void 0);
exports.Asignatura = Asignatura = __decorate([
    (0, typeorm_1.Entity)()
], Asignatura);
//# sourceMappingURL=asignatura.entity.js.map