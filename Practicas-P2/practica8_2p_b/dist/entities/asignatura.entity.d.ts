import { Nota } from './nota.entity';
export declare class Asignatura {
    id: number;
    descripcion: string;
    nivel: string;
    numeroCreditos: number;
    notas: Nota[];
}
