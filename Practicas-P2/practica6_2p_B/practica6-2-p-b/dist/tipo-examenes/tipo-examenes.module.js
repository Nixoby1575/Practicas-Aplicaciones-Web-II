"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoExamenesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tipo_examene_entity_1 = require("./entities/tipo-examene.entity");
const tipo_examenes_service_1 = require("./tipo-examenes.service");
const tipo_examenes_controller_1 = require("./tipo-examenes.controller");
let TipoExamenesModule = class TipoExamenesModule {
};
exports.TipoExamenesModule = TipoExamenesModule;
exports.TipoExamenesModule = TipoExamenesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tipo_examene_entity_1.TipoExamen])],
        providers: [tipo_examenes_service_1.TipoExamenesService],
        controllers: [tipo_examenes_controller_1.TipoExamenesController],
    })
], TipoExamenesModule);
//# sourceMappingURL=tipo-examenes.module.js.map