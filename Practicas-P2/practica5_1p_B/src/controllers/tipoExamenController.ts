import { Request, Response } from 'express';
import { getAllTiposExamen, getTipoExamenById, createTipoExamen as createTipoExamenRepo, updateTipoExamen as updateTipoExamenRepo, deleteTipoExamen as deleteTipoExamenRepo, recoverTipoExamen as recoverTipoExamenRepo } from '../repositories/tipoExamenRepository';

export const getTiposExamen = async (req: Request, res: Response) => {
  try {
    const tiposExamen = await getAllTiposExamen();
    res.json(tiposExamen);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching exam types' });
  }
};

export const getTipoExamen = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const tipoExamen = await getTipoExamenById(Number(id));
    if (tipoExamen) {
      res.json(tipoExamen);
    } else {
      res.status(404).json({ error: 'Exam type not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching exam type' });
  }
};

export const createTipoExamen = async (req: Request, res: Response) => {
  const { descripcion, indicaciones } = req.body;
  try {
    const nuevoTipoExamen = await createTipoExamenRepo(descripcion, indicaciones);
    res.json(nuevoTipoExamen);
  } catch (error) {
    res.status(500).json({ error: 'Error creating exam type' });
  }
};

export const updateTipoExamen = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { descripcion, indicaciones } = req.body;
  try {
    const tipoExamenActualizado = await updateTipoExamenRepo(Number(id), descripcion, indicaciones);
    res.json(tipoExamenActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error updating exam type' });
  }
};

export const deleteTipoExamen = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteTipoExamenRepo(Number(id));
    res.json({ message: 'Tipo de examen eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting exam type' });
  }
};

export const recoverTipoExamen = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await recoverTipoExamenRepo(Number(id));
    res.json({ message: 'Tipo de examen recuperado' });
  } catch (error) {
    res.status(500).json({ error: 'Error recovering exam type' });
  }
};
