import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdatePacienteInput {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  identificacion: string;
}
