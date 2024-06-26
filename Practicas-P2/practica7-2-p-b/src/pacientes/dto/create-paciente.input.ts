import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePacienteInput {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  identificacion: string;
}
