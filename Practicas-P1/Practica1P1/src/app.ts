import { paciente1, paciente3 } from './entities/Paciente';
import { tipoExamen1, tipoExamen3 } from './entities/TipoExamen';
import { resultado1, resultado3 } from './entities/Resultado';

import { IPaciente } from './interfaces/IPaciente';
import { ITipoExamen } from './interfaces/ITipoExamen';
import { IResultado } from './interfaces/IResultado';
import { User } from './interfaces/IPost';



import { eliminarElemento } from './functions/eliminar';


import { fetchUsers } from './services/api';



console.log("--------Resultados---------");
console.log("Paciente:", paciente3);
console.log("Tipo de Examen:", tipoExamen3);
console.log("Resultado:", resultado3);
console.log("");



const confirmarEliminacion = (resultadoEliminado: IResultado) => {
    console.log(`Se ha eliminado el siguiente resultado: ${resultadoEliminado.id}`);
    console.log("");
};

const resultados: IResultado[] = [resultado3];

console.log("Resultados antes de eliminar:");
console.log(resultados);
console.log("");
eliminarElemento(resultados, 1003, confirmarEliminacion);
console.log("Resultados después de eliminar:");
console.log(resultados);
console.log("");




//Servicio REST utilizado https://dummyjson.com

//Solicitud para un solo usuario siguiendo lo solicitado en la interface



async function main() {
    try {
        const User = await fetchUsers();
        console.log('****** Datos obtenidos de DummyJSON ******');
        console.log('User ID:', User?.id);
        console.log('User Name:', User?.firstName);
        console.log('User SSN:', User?.ssn);
    } catch (error) {
        console.error('Error:', error);
    }
}



/*

//Solicitud para un todos los usuarios siguiendo lo solicitado en la interface



async function main() {
    try {
        const users: User[] = await fetchUsers();
        console.log('****** Datos obtenidos de DummyJSON ******');

        users.forEach((user: User) => {
            console.log('User ID:', user.id);
            console.log('User Name:', user.firstName);
            console.log('User SSN:', user.ssn);
            console.log('-------------------------');
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

*/

main();
