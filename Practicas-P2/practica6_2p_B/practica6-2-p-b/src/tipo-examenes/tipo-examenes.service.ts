import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoExamen } from './entities/tipo-examene.entity';
import { CreateTipoExameneDto } from './dto/create-tipo-examene.dto';
import { UpdateTipoExameneDto } from './dto/update-tipo-examene.dto';

@Injectable()
export class TipoExamenesService {
  constructor(
    @InjectRepository(TipoExamen)
    private tipoExamenesRepository: Repository<TipoExamen>,
  ) {}

  findAll(): Promise<TipoExamen[]> {
    return this.tipoExamenesRepository.find();
  }

  async findOne(id: number): Promise<TipoExamen> {
    const tipoExamen = await this.tipoExamenesRepository.findOne({ where: { id } });
    if (!tipoExamen) {
      throw new NotFoundException(`TipoExamen with ID ${id} not found`);
    }
    return tipoExamen;
  }

  create(createTipoExamenDto: CreateTipoExameneDto): Promise<TipoExamen> {
    const tipoExamen = this.tipoExamenesRepository.create(createTipoExamenDto);
    return this.tipoExamenesRepository.save(tipoExamen);
  }

  async update(id: number, updateTipoExamenDto: UpdateTipoExameneDto): Promise<TipoExamen> {
    await this.tipoExamenesRepository.update(id, updateTipoExamenDto);
    const updatedTipoExamen = await this.findOne(id);
    return updatedTipoExamen;
  }

  async remove(id: number): Promise<void> {
    const tipoExamen = await this.findOne(id);
    await this.tipoExamenesRepository.update(id, { estado: 'Inactivo' });
  }

  async recover(id: number): Promise<void> {
    await this.tipoExamenesRepository.update(id, { estado: 'Activo' });
  }
}