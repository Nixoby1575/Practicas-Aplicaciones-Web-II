import prisma from '../datasources/prismaClient';

export const getAllResultados = async () => {
  return prisma.resultado.findMany();
};

export const getResultadoById = async (id: number) => {
  return prisma.resultado.findUnique({ where: { id } });
};

export const createResultado = async (idPaciente: number, idTipoExamen: number, resultado: string, valorPagado: number, observaciones?: string) => {
  return prisma.resultado.create({ data: { idPaciente, idTipoExamen, resultado, valorPagado, observaciones } });
};

export const updateResultado = async (id: number, idPaciente: number, idTipoExamen: number, resultado: string, valorPagado: number, observaciones?: string) => {
  return prisma.resultado.update({ where: { id }, data: { idPaciente, idTipoExamen, resultado, valorPagado, observaciones } });
};

export const deleteResultado = async (id: number) => {
  return prisma.resultado.update({ where: { id }, data: { estado: 'Inactivo' } });
};

export const recoverResultado = async (id: number) => {
  return prisma.resultado.update({ where: { id }, data: { estado: 'Activo' } });
};
