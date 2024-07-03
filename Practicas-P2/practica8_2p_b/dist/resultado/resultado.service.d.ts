import { Repository } from 'typeorm';
import { Resultado } from './entities/resultado.entity';
import { CreateResultadoDto } from './dto/create-resultado.dto';
export declare class ResultadoService {
    private readonly resultadoRepository;
    constructor(resultadoRepository: Repository<Resultado>);
    create(createResultadoDto: CreateResultadoDto): Promise<Resultado>;
    findAllActive(): Promise<Resultado[]>;
}
