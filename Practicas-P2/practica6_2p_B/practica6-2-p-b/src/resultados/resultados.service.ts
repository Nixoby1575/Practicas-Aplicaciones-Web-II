import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resultado } from './entities/resultado.entity';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';

@Injectable()
export class ResultadosService {
  constructor(
    @InjectRepository(Resultado)
    private resultadosRepository: Repository<Resultado>,
  ) {}

  findAll(): Promise<Resultado[]> {
    return this.resultadosRepository.find();
  }

  async findOne(id: number): Promise<Resultado> {
    const resultado = await this.resultadosRepository.findOne({ where: { id } });
    if (!resultado) {
      throw new NotFoundException(`Resultado with ID ${id} not found`);
    }
    return resultado;
  }

  create(createResultadoDto: CreateResultadoDto): Promise<Resultado> {
    const resultado = this.resultadosRepository.create(createResultadoDto);
    return this.resultadosRepository.save(resultado);
  }

  async update(id: number, updateResultadoDto: UpdateResultadoDto): Promise<Resultado> {
    await this.resultadosRepository.update(id, updateResultadoDto);
    const updatedResultado = await this.findOne(id);
    return updatedResultado;
  }

  async remove(id: number): Promise<void> {
    const resultado = await this.findOne(id);
    await this.resultadosRepository.update(id, { estado: 'Inactivo' });
  }

  async recover(id: number): Promise<void> {
    await this.resultadosRepository.update(id, { estado: 'Activo' });
  }
}