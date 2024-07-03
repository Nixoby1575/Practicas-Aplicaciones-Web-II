import { Alumno } from './alumno.entity';
import { Asignatura } from './asignatura.entity';
export declare class Nota {
    id: number;
    alumno: Alumno;
    asignatura: Asignatura;
    parcial: string;
    nota: number;
    observacion: string;
    estado: string;
}
