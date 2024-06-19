import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Resultado } from '../../resultados/entities/resultado.entity';

@Entity()
export class TipoExamen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column()
  indicaciones: string;

  @Column({ default: 'Activo' })
  estado: string;

  @OneToMany(() => Resultado, resultado => resultado.tipoExamen)
  resultados: Resultado[];
}
