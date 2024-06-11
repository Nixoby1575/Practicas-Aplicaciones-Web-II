import { Router } from 'express';
import { getPacientes, getPaciente, createPaciente, updatePaciente, deletePaciente, recoverPaciente } from '../controllers/pacienteController';

const router = Router();

router.get('/', getPacientes);
router.get('/:id', getPaciente);
router.post('/', createPaciente);
router.put('/:id', updatePaciente);
router.delete('/:id', deletePaciente);
router.patch('/recover/:id', recoverPaciente);

export default router;
