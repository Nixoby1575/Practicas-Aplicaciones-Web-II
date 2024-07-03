import { Resultado } from '../../resultado/entities/resultado.entity';
export declare class TipoExamen {
    id: number;
    descripcion: string;
    indicaciones: string;
    estado: string;
    resultados: Resultado[];
}
