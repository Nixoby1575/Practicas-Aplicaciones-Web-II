import prisma from '../datasources/prismaClient';

export const getAllTiposExamen = async () => {
  return prisma.tipoExamen.findMany();
};

export const getTipoExamenById = async (id: number) => {
  return prisma.tipoExamen.findUnique({ where: { id } });
};

export const createTipoExamen = async (descripcion: string, indicaciones: string) => {
  return prisma.tipoExamen.create({ data: { descripcion, indicaciones } });
};

export const updateTipoExamen = async (id: number, descripcion: string, indicaciones: string) => {
  return prisma.tipoExamen.update({ where: { id }, data: { descripcion, indicaciones } });
};

export const deleteTipoExamen = async (id: number) => {
  return prisma.tipoExamen.update({ where: { id }, data: { estado: 'Inactivo' } });
};

export const recoverTipoExamen = async (id: number) => {
  return prisma.tipoExamen.update({ where: { id }, data: { estado: 'Activo' } });
};
