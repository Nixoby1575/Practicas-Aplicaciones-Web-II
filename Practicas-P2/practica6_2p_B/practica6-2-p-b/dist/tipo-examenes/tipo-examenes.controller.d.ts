import { TipoExamenesService } from './tipo-examenes.service';
import { CreateTipoExameneDto } from './dto/create-tipo-examene.dto';
import { UpdateTipoExameneDto } from './dto/update-tipo-examene.dto';
export declare class TipoExamenesController {
    private readonly tipoExamenesService;
    constructor(tipoExamenesService: TipoExamenesService);
    findAll(): Promise<import("./entities/tipo-examene.entity").TipoExamen[]>;
    findOne(id: string): Promise<import("./entities/tipo-examene.entity").TipoExamen>;
    create(createTipoExamenDto: CreateTipoExameneDto): Promise<import("./entities/tipo-examene.entity").TipoExamen>;
    update(id: string, updateTipoExamenDto: UpdateTipoExameneDto): Promise<import("./entities/tipo-examene.entity").TipoExamen>;
    remove(id: string): Promise<void>;
    recover(id: string): Promise<void>;
}
