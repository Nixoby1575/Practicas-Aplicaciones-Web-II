export const createPaciente = (nombre: string, identificacion: string) => {
    return {
        nombre,
        identificacion,
        estado: 'Activo',
    };
};

export const createTipoExamen = (descripcion: string, indicaciones: string) => {
    return {
        descripcion,
        indicaciones,
        estado: 'Activo',
    };
};

export const createResultado = (idPaciente: number, idTipoExamen: number, resultado: string, valorPagado: number, observaciones?: string) => {
    return {
        idPaciente,
        idTipoExamen,
        resultado,
        valorPagado,
        observaciones: observaciones ?? null,
        estado: 'Activo',
    };
};