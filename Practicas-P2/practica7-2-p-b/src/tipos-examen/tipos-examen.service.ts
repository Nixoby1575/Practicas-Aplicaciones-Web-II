import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoExamen } from './entities/tipos-examen.entity';
import { CreateTipoExamenInput } from './dto/create-tipos-examan.input';
import { UpdateTiposExamanInput } from './dto/update-tipos-examan.input';

@Injectable()
export class TiposExamenService {
  constructor(
    @InjectRepository(TipoExamen)
    private tiposExamenRepository: Repository<TipoExamen>,
  ) {}

  async create(createTipoExamenInput: CreateTipoExamenInput): Promise<TipoExamen> {
    const tipoExamen = this.tiposExamenRepository.create(createTipoExamenInput);
    return this.tiposExamenRepository.save(tipoExamen);
  }

  async findAll(estado?: boolean): Promise<TipoExamen[]> {
    const where = estado !== undefined ? { estado } : {};
    return this.tiposExamenRepository.find({ where });
  }

  async findOne(id: number): Promise<TipoExamen> {
    const tipoExamen = await this.tiposExamenRepository.findOne({ where: { id } });
    if (!tipoExamen) {
      throw new NotFoundException(`Tipo de Examen con ID ${id} no encontrado`);
    }
    return tipoExamen;
  }

  async update(id: number, updateTipoExamenInput: UpdateTiposExamanInput): Promise<TipoExamen> {
    const tipoExamen = await this.findOne(id);
    Object.assign(tipoExamen, updateTipoExamenInput);
    return this.tiposExamenRepository.save(tipoExamen);
  }

  async remove(id: number): Promise<void> {
    const tipoExamen = await this.findOne(id);
    tipoExamen.estado = false;
    await this.tiposExamenRepository.save(tipoExamen);
  }

  async recover(id: number): Promise<void> {
    const tipoExamen = await this.findOne(id);
    tipoExamen.estado = true;
    await this.tiposExamenRepository.save(tipoExamen);
  }
}
