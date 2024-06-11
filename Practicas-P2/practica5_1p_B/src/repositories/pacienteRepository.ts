import prisma from '../datasources/prismaClient';

export const getAllPacientes = async () => {
  return prisma.paciente.findMany();
};

export const getPacienteById = async (id: number) => {
  return prisma.paciente.findUnique({ where: { id } });
};

export const createPaciente = async (nombre: string, identificacion: string) => {
  return prisma.paciente.create({ data: { nombre, identificacion } });
};

export const updatePaciente = async (id: number, nombre: string, identificacion: string) => {
  return prisma.paciente.update({ where: { id }, data: { nombre, identificacion } });
};

export const deletePaciente = async (id: number) => {
  return prisma.paciente.update({ where: { id }, data: { estado: 'Inactivo' } });
};

export const recoverPaciente = async (id: number) => {
  return prisma.paciente.update({ where: { id }, data: { estado: 'Activo' } });
};
