import { Router } from 'express';
import { getResultados, getResultado, createResultado, updateResultado, deleteResultado, recoverResultado } from '../controllers/resultadoController';

const router = Router();

router.get('/', getResultados);
router.get('/:id', getResultado);
router.post('/', createResultado);
router.put('/:id', updateResultado);
router.delete('/:id', deleteResultado);
router.patch('/recover/:id', recoverResultado);

export default router;
