import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Paciente } from '../../pacientes/entities/paciente.entity';
import { TipoExamen } from '../../tipo-examenes/entities/tipo-examene.entity';

@Entity()
export class Resultado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idPaciente: number;

  @Column()
  idTipoExamen: number;

  @Column()
  resultado: string;

  @Column()
  valorPagado: number;

  @Column({ nullable: true })
  observaciones: string;

  @Column({ default: 'Activo' })
  estado: string;

  @ManyToOne(() => Paciente, paciente => paciente.resultados)
  paciente: Paciente;

  @ManyToOne(() => TipoExamen, tipoExamen => tipoExamen.resultados)
  tipoExamen: TipoExamen;
}
