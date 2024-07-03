import { Paciente } from './paciente.entity';
import { TipoExamen } from './tipo-examen.entity';
export declare class Resultado {
    id: number;
    paciente: Paciente;
    tipoExamen: TipoExamen;
    resultado: string;
    valorPagado: number;
    observaciones: string;
    estado: string;
}
