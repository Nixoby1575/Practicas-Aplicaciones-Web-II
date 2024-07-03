
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Paciente } from './paciente.entity';
import { TipoExamen } from './tipo-examen.entity';

@Entity()
export class Resultado {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Paciente, paciente => paciente.resultados)
  paciente: Paciente;

  @ManyToOne(() => TipoExamen, tipoExamen => tipoExamen.resultados)
  tipoExamen: TipoExamen;

  @Column()
  resultado: string;

  @Column()
  valorPagado: number;

  @Column({ nullable: true })
  observaciones: string;

  @Column({ default: 'Activo' })
  estado: string;
}
