import { IsString } from 'class-validator';

export class CreatePacienteDto {
  @IsString()
  nombre: string;

  @IsString()
  identificacion: string;
}
