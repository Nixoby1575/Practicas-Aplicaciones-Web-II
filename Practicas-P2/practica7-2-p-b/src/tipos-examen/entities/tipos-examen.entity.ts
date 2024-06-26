import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Resultado } from '../../resultados/entities/resultado.entity';

@Entity()
export class TipoExamen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column()
  indicaciones: string;

  @Column({ default: true })
  estado: boolean;

  @OneToMany(() => Resultado, (resultado) => resultado.tipoExamen)
  resultados: Resultado[];
}
