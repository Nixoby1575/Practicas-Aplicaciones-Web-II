// src/index.ts
import { Paciente } from "./models/Paciente";
import { TipoExamen } from "./models/TipoExamen";
import { Resultado } from "./models/Resultado";
import { eliminarTransaccion, recuperarTransaccion } from "./services/transaccionService";

// Aquí puedes utilizar las funciones eliminarTransaccion y recuperarTransaccion para probar su funcionamiento

async function main() {
    // Ejemplo de uso
    try {
        await eliminarTransaccion(1);
        console.log("Transacción eliminada exitosamente");
    } catch (error) {
        console.error("Error al eliminar transacción:", error);
    }

    try {
        await recuperarTransaccion(1);
        console.log("Transacción recuperada exitosamente");
    } catch (error) {
        console.error("Error al recuperar transacción:", error);
    }
}

main();
