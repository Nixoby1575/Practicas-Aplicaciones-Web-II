
import { paciente1, paciente2, paciente3, paciente4 } from './Paciente';
import { tipoExamen1, tipoExamen2, tipoExamen3 } from './TipoExamen';

export const resultado1 = {
    id: 1001,
    idPaciente: paciente1.id,
    idTipoExamen: tipoExamen1.id,
    resultadoExamen: "Normal",
    valorPagado: 50.00,
    observaciones: "El paciente se encuentra en buen estado de salud."
};

export const resultado2 = {
    id: 1002,
    idPaciente: paciente2.id,
    idTipoExamen: tipoExamen2.id,
    resultadoExamen: "Anormal",
    valorPagado: 70.00,
    observaciones: "Se recomienda seguimiento con especialista."
};

export const resultado3 = {
    id: 1003,
    idPaciente: paciente3.id,
    idTipoExamen: tipoExamen3.id,
    resultadoExamen: "Normal",
    valorPagado: 60.00,
    observaciones: "No se observan anomalías."
};

export const resultado4 = {
    id: 1004,
    idPaciente: paciente4.id,
    idTipoExamen: tipoExamen1.id,
    resultadoExamen: "Anormal",
    valorPagado: 55.00,
    observaciones: "Se requiere análisis adicional."
};
