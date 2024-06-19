import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from './entities/paciente.entity';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Injectable()
export class PacientesService {
  constructor(
    @InjectRepository(Paciente)
    private pacientesRepository: Repository<Paciente>,
  ) {}

  findAll(): Promise<Paciente[]> {
    return this.pacientesRepository.find();
  }

  async findOne(id: number): Promise<Paciente> {
    const paciente = await this.pacientesRepository.findOne({ where: { id } });
    if (!paciente) {
      throw new NotFoundException(`Paciente with ID ${id} not found`);
    }
    return paciente;
  }

  create(createPacienteDto: CreatePacienteDto): Promise<Paciente> {
    const paciente = this.pacientesRepository.create(createPacienteDto);
    return this.pacientesRepository.save(paciente);
  }

  async update(id: number, updatePacienteDto: UpdatePacienteDto): Promise<Paciente> {
    await this.pacientesRepository.update(id, updatePacienteDto);
    const updatedPaciente = await this.findOne(id);
    return updatedPaciente;
  }

  async remove(id: number): Promise<void> {
    const paciente = await this.findOne(id);
    await this.pacientesRepository.update(id, { estado: 'Inactivo' });
  }

  async recover(id: number): Promise<void> {
    await this.pacientesRepository.update(id, { estado: 'Activo' });
  }
}
