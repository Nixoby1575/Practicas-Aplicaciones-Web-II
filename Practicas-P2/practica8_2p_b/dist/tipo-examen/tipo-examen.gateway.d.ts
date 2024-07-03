import { TipoExamenService } from './tipo-examen.service';
import { CreateTipoExamanDto } from './dto/create-tipo-examan.dto';
import { UpdateTipoExamanDto } from './dto/update-tipo-examan.dto';
export declare class TipoExamenGateway {
    private readonly tipoExamenService;
    constructor(tipoExamenService: TipoExamenService);
    create(createTipoExamanDto: CreateTipoExamanDto): Promise<import("./entities/tipo-examan.entity").TipoExamen>;
    findAll(): Promise<import("./entities/tipo-examan.entity").TipoExamen[]>;
    findOne(id: number): Promise<import("./entities/tipo-examan.entity").TipoExamen>;
    update(updateTipoExamanDto: UpdateTipoExamanDto): Promise<import("./entities/tipo-examan.entity").TipoExamen>;
    remove(id: number): Promise<void>;
}
