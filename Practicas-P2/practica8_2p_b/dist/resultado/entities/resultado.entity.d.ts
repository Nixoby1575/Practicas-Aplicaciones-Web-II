import { Paciente } from '../../paciente/entities/paciente.entity';
import { TipoExamen } from '../../tipo-examen/entities/tipo-examan.entity';
export declare class Resultado {
    id: number;
    paciente: Paciente;
    tipoExamen: TipoExamen;
    resultado: string;
    valorPagado: number;
    observaciones: string;
    estado: string;
}
