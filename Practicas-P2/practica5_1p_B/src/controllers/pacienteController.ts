import { Request, Response } from 'express';
import { getAllPacientes, getPacienteById, createPaciente as createPacienteRepo, updatePaciente as updatePacienteRepo, deletePaciente as deletePacienteRepo, recoverPaciente as recoverPacienteRepo } from '../repositories/pacienteRepository';

export const getPacientes = async (req: Request, res: Response) => {
  try {
    const pacientes = await getAllPacientes();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching patients' });
  }
};

export const getPaciente = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const paciente = await getPacienteById(Number(id));
    if (paciente) {
      res.json(paciente);
    } else {
      res.status(404).json({ error: 'Patient not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching patient' });
  }
};

export const createPaciente = async (req: Request, res: Response) => {
  const { nombre, identificacion } = req.body;
  try {
    const nuevoPaciente = await createPacienteRepo(nombre, identificacion);
    res.json(nuevoPaciente);
  } catch (error) {
    res.status(500).json({ error: 'Error creating patient' });
  }
};

export const updatePaciente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, identificacion } = req.body;
  try {
    const pacienteActualizado = await updatePacienteRepo(Number(id), nombre, identificacion);
    res.json(pacienteActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error updating patient' });
  }
};

export const deletePaciente = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deletePacienteRepo(Number(id));
    res.json({ message: 'Paciente eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting patient' });
  }
};

export const recoverPaciente = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await recoverPacienteRepo(Number(id));
    res.json({ message: 'Paciente recuperado' });
  } catch (error) {
    res.status(500).json({ error: 'Error recovering patient' });
  }
};
