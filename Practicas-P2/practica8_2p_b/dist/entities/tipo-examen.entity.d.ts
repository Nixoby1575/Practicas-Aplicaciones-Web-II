import { Resultado } from './resultado.entity';
export declare class TipoExamen {
    id: number;
    descripcion: string;
    indicaciones: string;
    estado: string;
    resultados: Resultado[];
}
