import { Resultado } from '../../resultados/entities/resultado.entity';
export declare class Paciente {
    id: number;
    nombre: string;
    identificacion: string;
    estado: string;
    resultados: Resultado[];
}
