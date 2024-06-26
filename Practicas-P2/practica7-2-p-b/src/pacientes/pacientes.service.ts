import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from './entities/paciente.entity';
import { CreatePacienteInput } from './dto/create-paciente.input';
import { UpdatePacienteInput } from './dto/update-paciente.input';

@Injectable()
export class PacientesService {
  constructor(
    @InjectRepository(Paciente)
    private pacientesRepository: Repository<Paciente>,
  ) {}

  async create(createPacienteInput: CreatePacienteInput): Promise<Paciente> {
    const paciente = this.pacientesRepository.create(createPacienteInput);
    return this.pacientesRepository.save(paciente);
  }

  async findAll(estado?: boolean): Promise<Paciente[]> {
    const where = estado !== undefined ? { estado } : {};
    return this.pacientesRepository.find({ where });
  }

  async findOne(id: number): Promise<Paciente> {
    const paciente = await this.pacientesRepository.findOne({ where: { id } });
    if (!paciente) {
      throw new NotFoundException(`Paciente con ID ${id} no encontrado`);
    }
    return paciente;
  }

  async update(id: number, updatePacienteInput: UpdatePacienteInput): Promise<Paciente> {
    const paciente = await this.findOne(id);
    Object.assign(paciente, updatePacienteInput);
    return this.pacientesRepository.save(paciente);
  }

  async remove(id: number): Promise<void> {
    const paciente = await this.findOne(id);
    paciente.estado = false;
    await this.pacientesRepository.save(paciente);
  }

  async recover(id: number): Promise<void> {
    const paciente = await this.findOne(id);
    paciente.estado = true;
    await this.pacientesRepository.save(paciente);
  }
}
