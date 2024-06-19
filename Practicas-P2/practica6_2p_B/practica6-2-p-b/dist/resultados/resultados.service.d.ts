import { Repository } from 'typeorm';
import { Resultado } from './entities/resultado.entity';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
export declare class ResultadosService {
    private resultadosRepository;
    constructor(resultadosRepository: Repository<Resultado>);
    findAll(): Promise<Resultado[]>;
    findOne(id: number): Promise<Resultado>;
    create(createResultadoDto: CreateResultadoDto): Promise<Resultado>;
    update(id: number, updateResultadoDto: UpdateResultadoDto): Promise<Resultado>;
    remove(id: number): Promise<void>;
    recover(id: number): Promise<void>;
}
