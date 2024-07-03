import { ResultadoService } from './resultado.service';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
export declare class ResultadoGateway {
    private readonly resultadoService;
    constructor(resultadoService: ResultadoService);
    create(createResultadoDto: CreateResultadoDto): Promise<import("./entities/resultado.entity").Resultado>;
    findAll(): any;
    findOne(id: number): any;
    update(updateResultadoDto: UpdateResultadoDto): any;
    remove(id: number): any;
}
