import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resultado } from './entities/resultado.entity';
import { CreateResultadoInput } from './dto/create-resultado.input';
import { UpdateResultadoInput } from './dto/update-resultado.input';

@Injectable()
export class ResultadosService {
  constructor(
    @InjectRepository(Resultado)
    private resultadosRepository: Repository<Resultado>,
  ) {}

  async create(createResultadoInput: CreateResultadoInput): Promise<Resultado> {
    const resultado = this.resultadosRepository.create(createResultadoInput);
    return this.resultadosRepository.save(resultado);
  }

  async findAll(estado?: boolean): Promise<Resultado[]> {
    const where = estado !== undefined ? { estado } : {};
    return this.resultadosRepository.find({ where });
  }

  async findOne(id: number): Promise<Resultado> {
    const resultado = await this.resultadosRepository.findOne({ where: { id } });
    if (!resultado) {
      throw new NotFoundException(`Resultado con ID ${id} no encontrado`);
    }
    return resultado;
  }

  async update(id: number, updateResultadoInput: UpdateResultadoInput): Promise<Resultado> {
    const resultado = await this.findOne(id);
    Object.assign(resultado, updateResultadoInput);
    return this.resultadosRepository.save(resultado);
  }

  async remove(id: number): Promise<void> {
    const resultado = await this.findOne(id);
    resultado.estado = false;
    await this.resultadosRepository.save(resultado);
  }

  async recover(id: number): Promise<void> {
    const resultado = await this.findOne(id);
    resultado.estado = true;
    await this.resultadosRepository.save(resultado);
  }
}
