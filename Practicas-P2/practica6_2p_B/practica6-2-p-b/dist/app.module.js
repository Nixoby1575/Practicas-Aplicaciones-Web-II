"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const pacientes_module_1 = require("./pacientes/pacientes.module");
const tipo_examenes_module_1 = require("./tipo-examenes/tipo-examenes.module");
const resultados_module_1 = require("./resultados/resultados.module");
const paciente_entity_1 = require("./pacientes/entities/paciente.entity");
const tipo_examene_entity_1 = require("./tipo-examenes/entities/tipo-examene.entity");
const resultado_entity_1 = require("./resultados/entities/resultado.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    type: 'postgres',
                    url: configService.get('DATABASE_URL'),
                    entities: [paciente_entity_1.Paciente, tipo_examene_entity_1.TipoExamen, resultado_entity_1.Resultado],
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
            pacientes_module_1.PacientesModule,
            tipo_examenes_module_1.TipoExamenesModule,
            resultados_module_1.ResultadosModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map