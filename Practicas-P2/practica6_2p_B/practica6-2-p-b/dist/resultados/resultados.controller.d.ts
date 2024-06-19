import { ResultadosService } from './resultados.service';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
export declare class ResultadosController {
    private readonly resultadosService;
    constructor(resultadosService: ResultadosService);
    findAll(): Promise<import("./entities/resultado.entity").Resultado[]>;
    findOne(id: string): Promise<import("./entities/resultado.entity").Resultado>;
    create(createResultadoDto: CreateResultadoDto): Promise<import("./entities/resultado.entity").Resultado>;
    update(id: string, updateResultadoDto: UpdateResultadoDto): Promise<import("./entities/resultado.entity").Resultado>;
    remove(id: string): Promise<void>;
    recover(id: string): Promise<void>;
}
