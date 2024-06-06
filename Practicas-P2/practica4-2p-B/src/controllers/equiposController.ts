import { Request, Response } from 'express';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const createMasterEntity = (nombre: string, fechaNacimiento: string): any => {
  const id = uuidv4(); 
  const fechaNacimientoDate = new Date(fechaNacimiento);
  const edad = calcularEdad(fechaNacimientoDate);
  return { id, nombre, fechaNacimiento, edad };
};

const calcularEdad = (fechaNacimiento: Date): number => {
  const hoy = new Date();
  const cumpleanos = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - cumpleanos.getFullYear();
  const mes = hoy.getMonth() - cumpleanos.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }

  return edad;
};

const obtenerDatosDeServicioCompanero = async (endpoint: string) => {
  try {
    const response = await axios.get(`http://192.168.100.249:3000/alumnos${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos del servicio de mi compañero:', error);
    throw error;
  }
};

export const obtenerEquipos = async (req: Request, res: Response) => {
  try {
    const equiposExternos = await obtenerDatosDeServicioCompanero('/equipos');
    const equiposLocales = [
      { id: '1', nombre: 'Equipo 1', pais: 'País 1', entrenador: 'Entrenador 1', estado: 'Activo' },
      { id: '2', nombre: 'Equipo 2', pais: 'País 2', entrenador: 'Entrenador 2', estado: 'Activo' }
    ];
    res.json({ locales: equiposLocales, externos: equiposExternos });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los equipos' });
  }
};

export const crearEquipo = async (req: Request, res: Response) => {
  const { nombre, pais, entrenador, estado } = req.body;
  const nuevoEquipo = { id: uuidv4(), nombre, pais, entrenador, estado };
  res.status(201).json(nuevoEquipo);
};
