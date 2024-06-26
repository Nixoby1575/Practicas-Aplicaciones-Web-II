import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Paciente } from '../../pacientes/entities/paciente.entity';
import { TipoExamen } from '../../tipos-examen/entities/tipos-examen.entity';

@Entity()
export class Resultado {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Paciente, (paciente) => paciente.resultados)
  paciente: Paciente;

  @ManyToOne(() => TipoExamen, (tipoExamen) => tipoExamen.resultados)
  tipoExamen: TipoExamen;

  @Column()
  resultado: string;

  @Column()
  valorPagado: number;

  @Column()
  observaciones: string;

  @Column({ default: true })
  estado: boolean;
}
