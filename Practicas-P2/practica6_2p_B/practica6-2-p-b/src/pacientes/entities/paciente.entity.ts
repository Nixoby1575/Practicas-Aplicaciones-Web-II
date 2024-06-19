import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Resultado } from '../../resultados/entities/resultado.entity';

@Entity()
export class Paciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  identificacion: string;

  @Column({ default: 'Activo' })
  estado: string;

  @OneToMany(() => Resultado, resultado => resultado.paciente)
  resultados: Resultado[];
}
