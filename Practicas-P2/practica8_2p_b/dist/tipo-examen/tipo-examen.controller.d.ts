import { TipoExamenService } from './tipo-examen.service';
import { CreateTipoExamanDto } from './dto/create-tipo-examan.dto';
import { UpdateTipoExamanDto } from './dto/update-tipo-examan.dto';
export declare class TipoExamenController {
    private readonly tipoExamenService;
    constructor(tipoExamenService: TipoExamenService);
    create(createTipoExamanDto: CreateTipoExamanDto): Promise<import("./entities/tipo-examan.entity").TipoExamen>;
    findAll(): Promise<import("./entities/tipo-examan.entity").TipoExamen[]>;
    findOne(id: string): Promise<import("./entities/tipo-examan.entity").TipoExamen>;
    update(id: string, updateTipoExamanDto: UpdateTipoExamanDto): Promise<import("./entities/tipo-examan.entity").TipoExamen>;
    remove(id: string): Promise<void>;
}
