import { Request, Response } from 'express';
import { getAllResultados, getResultadoById, createResultado as createResultadoRepo, updateResultado as updateResultadoRepo, deleteResultado as deleteResultadoRepo, recoverResultado as recoverResultadoRepo } from '../repositories/resultadoRepository';

export const getResultados = async (req: Request, res: Response) => {
  try {
    const resultados = await getAllResultados();
    res.json(resultados);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching results' });
  }
};

export const getResultado = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const resultado = await getResultadoById(Number(id));
    if (resultado) {
      res.json(resultado);
    } else {
      res.status(404).json({ error: 'Result not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching result' });
  }
};

export const createResultado = async (req: Request, res: Response) => {
  const { idPaciente, idTipoExamen, resultado, valorPagado, observaciones } = req.body;
  try {
    const nuevoResultado = await createResultadoRepo(idPaciente, idTipoExamen, resultado, valorPagado, observaciones);
    res.json(nuevoResultado);
  } catch (error) {
    res.status(500).json({ error: 'Error creating result' });
  }
};

export const updateResultado = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { idPaciente, idTipoExamen, resultado, valorPagado, observaciones } = req.body;
  try {
    const resultadoActualizado = await updateResultadoRepo(Number(id), idPaciente, idTipoExamen, resultado, valorPagado, observaciones);
    res.json(resultadoActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error updating result' });
  }
};

export const deleteResultado = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteResultadoRepo(Number(id));
    res.json({ message: 'Resultado eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting result' });
  }
};

export const recoverResultado = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await recoverResultadoRepo(Number(id));
    res.json({ message: 'Resultado recuperado' });
  } catch (error) {
    res.status(500).json({ error: 'Error recovering result' });
  }
};
