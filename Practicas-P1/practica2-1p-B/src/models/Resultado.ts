export interface Resultado {
    id: number;
    idPaciente: number;
    idTipoExamen: number;
    resultadoExamen: string;
    valorPagado: number;
    observaciones: string;
    estado: boolean;
}
