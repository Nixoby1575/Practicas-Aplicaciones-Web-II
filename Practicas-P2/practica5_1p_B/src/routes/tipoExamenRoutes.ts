import { Router } from 'express';
import { getTiposExamen, getTipoExamen, createTipoExamen, updateTipoExamen, deleteTipoExamen, recoverTipoExamen } from '../controllers/tipoExamenController';

const router = Router();

router.get('/', getTiposExamen);
router.get('/:id', getTipoExamen);
router.post('/', createTipoExamen);
router.put('/:id', updateTipoExamen);
router.delete('/:id', deleteTipoExamen);
router.patch('/recover/:id', recoverTipoExamen);

export default router;
