"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoExamenModule = void 0;
const common_1 = require("@nestjs/common");
const tipo_examen_service_1 = require("./tipo-examen.service");
const tipo_examen_gateway_1 = require("./tipo-examen.gateway");
let TipoExamenModule = class TipoExamenModule {
};
exports.TipoExamenModule = TipoExamenModule;
exports.TipoExamenModule = TipoExamenModule = __decorate([
    (0, common_1.Module)({
        providers: [tipo_examen_gateway_1.TipoExamenGateway, tipo_examen_service_1.TipoExamenService],
    })
], TipoExamenModule);
//# sourceMappingURL=tipo-examen.module.js.map