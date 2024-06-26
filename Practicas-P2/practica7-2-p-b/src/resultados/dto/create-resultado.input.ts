import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateResultadoInput {
  @IsNotEmpty()
  @IsNumber()
  pacienteId: number;

  @IsNotEmpty()
  @IsNumber()
  tipoExamenId: number;

  @IsNotEmpty()
  @IsString()
  resultado: string;

  @IsNotEmpty()
  @IsNumber()
  valorPagado: number;

  @IsString()
  observaciones: string;
}
