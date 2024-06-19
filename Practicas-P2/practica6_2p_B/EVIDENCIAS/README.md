# Medical Exam API

Esta es una API para la gestión de exámenes médicos. Permite gestionar pacientes, tipos de exámenes y resultados de exámenes.

# Variables de Entorno
Archivo .env en la raíz del proyecto con la siguiente configuración:

DATABASE_URL ="postgres://postgres.kckcqrwoozgyyhpidjad:PracticasAppsWeb123@aws-0-us-west-1.pooler.supabase.com:6543/postgres"


### Paciente
Obtener todos los pacientes
Método: GET
URL: http://localhost:3000/pacientes


**Obtener un paciente por ID**
Método: GET
URL: http://localhost:3000/pacientes/{id}


**Crear un nuevo paciente**
Método: POST
URL: http://localhost:3000/pacientes
Body (JSON):
{
  "nombre": "Juan Perez",
  "identificacion": "123456789"
}


**Actualizar un paciente por ID**
Método: PUT
URL: http://localhost:3000/pacientes/{id}
Body (JSON):
{
  "nombre": "Juan Perez Actualizado",
  "identificacion": "987654321"
}


**Eliminar un paciente por ID (Eliminación Lógica)**
Método: DELETE
URL: http://localhost:3000/pacientes/{id}


**Recuperar un paciente eliminado**
Método: PATCH
URL: http://localhost:3000/pacientes/recover/{id}



### TipoExamen

**TipoExamenes**
Obtener todos los tipos de examen
Método: GET
URL: http://localhost:3000/tipo-examenes


**Obtener un tipo de examen por ID**
Método: GET
URL: http://localhost:3000/tipo-examenes/{id}


**Crear un nuevo tipo de examen**
Método: POST
URL: http://localhost:3000/tipo-examenes
Body (JSON):
{
  "descripcion": "Examen de Sangre",
  "indicaciones": "Ayuno de 8 horas"
}


**Actualizar un tipo de examen por ID**
Método: PUT
URL: http://localhost:3000/tipo-examenes/{id}
Body (JSON):
{
  "descripcion": "Examen de Orina",
  "indicaciones": "Recolectar la primera orina de la mañana"
}


**Eliminar un tipo de examen por ID (Eliminación Lógica)**
Método: DELETE
URL: http://localhost:3000/tipo-examenes/{id}


**Recuperar un tipo de examen eliminado**
Método: PATCH
URL: http://localhost:3000/tipo-examenes/recover/{id}



### Resultado

**Obtener todos los resultados**
Método: GET
URL: http://localhost:3000/resultados


**Obtener un resultado por ID**
Método: GET
URL: http://localhost:3000/resultados/{id}


**Crear un nuevo resultado**
Método: POST
URL: http://localhost:3000/resultados
Body (JSON):
{
  "idPaciente": 1,
  "idTipoExamen": 1,
  "resultado": "Normal",
  "valorPagado": 50.0,
  "observaciones": "Ninguna"
}


Actualizar un resultado por ID
Método: PUT
URL: http://localhost:3000/resultados/{id}
Body (JSON):
{
  "idPaciente": 1,
  "idTipoExamen": 1,
  "resultado": "Anormal",
  "valorPagado": 55.0,
  "observaciones": "Requiere seguimiento"
}


**Eliminar un resultado por ID (Eliminación Lógica)**
Método: DELETE
URL: http://localhost:3000/resultados/{id}


**Recuperar un resultado eliminado**
Método: PATCH
URL: http://localhost:3000/resultados/recover/{id}

## Configuración

### Instalación de dependencias

**bash**
npm install
