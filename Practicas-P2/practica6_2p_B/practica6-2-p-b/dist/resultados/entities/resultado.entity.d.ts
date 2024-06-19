import { Paciente } from '../../pacientes/entities/paciente.entity';
import { TipoExamen } from '../../tipo-examenes/entities/tipo-examene.entity';
export declare class Resultado {
    id: number;
    idPaciente: number;
    idTipoExamen: number;
    resultado: string;
    valorPagado: number;
    observaciones: string;
    estado: string;
    paciente: Paciente;
    tipoExamen: TipoExamen;
}
