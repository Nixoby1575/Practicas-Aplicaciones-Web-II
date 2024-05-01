import { IResultado } from '../interfaces/IResultado';

interface CallbackFunction {
    (resultadoEliminado: IResultado): void;
}

export const eliminarElemento = (
    arreglo: IResultado[],
    id: number,
    callback: CallbackFunction
) => {
    const indice = arreglo.findIndex(resultado => resultado.id === id);
    if (indice !== -1) {
        const resultadoEliminado = arreglo.splice(indice, 1)[0];
        callback(resultadoEliminado);
    } else {
        console.log(`No se encontró ningún elemento con el ID ${id}`);
    }
};