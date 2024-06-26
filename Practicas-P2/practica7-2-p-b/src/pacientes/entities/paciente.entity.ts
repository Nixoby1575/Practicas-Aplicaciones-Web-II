import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Resultado } from '../../resultados/entities/resultado.entity';

@Entity()
export class Paciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  identificacion: string;

  @Column({ default: true })
  estado: boolean;

  @OneToMany(() => Resultado, (resultado) => resultado.paciente)
  resultados: Resultado[];
}
