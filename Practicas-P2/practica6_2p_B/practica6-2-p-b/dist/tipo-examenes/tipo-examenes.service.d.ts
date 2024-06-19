import { Repository } from 'typeorm';
import { TipoExamen } from './entities/tipo-examene.entity';
import { CreateTipoExameneDto } from './dto/create-tipo-examene.dto';
import { UpdateTipoExameneDto } from './dto/update-tipo-examene.dto';
export declare class TipoExamenesService {
    private tipoExamenesRepository;
    constructor(tipoExamenesRepository: Repository<TipoExamen>);
    findAll(): Promise<TipoExamen[]>;
    findOne(id: number): Promise<TipoExamen>;
    create(createTipoExamenDto: CreateTipoExameneDto): Promise<TipoExamen>;
    update(id: number, updateTipoExamenDto: UpdateTipoExameneDto): Promise<TipoExamen>;
    remove(id: number): Promise<void>;
    recover(id: number): Promise<void>;
}
