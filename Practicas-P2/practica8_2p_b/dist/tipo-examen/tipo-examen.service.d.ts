import { Repository } from 'typeorm';
import { TipoExamen } from './entities/tipo-examan.entity';
import { CreateTipoExamanDto } from './dto/create-tipo-examan.dto';
import { UpdateTipoExamanDto } from './dto/update-tipo-examan.dto';
export declare class TipoExamenService {
    private readonly tipoExamenRepository;
    constructor(tipoExamenRepository: Repository<TipoExamen>);
    create(createTipoExamenDto: CreateTipoExamanDto): Promise<TipoExamen>;
    findAll(): Promise<TipoExamen[]>;
    findOne(id: number): Promise<TipoExamen>;
    update(id: number, updateTipoExamenDto: UpdateTipoExamanDto): Promise<TipoExamen>;
    remove(id: number): Promise<void>;
}
