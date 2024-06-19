import { IsInt, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateResultadoDto {
  @IsInt()
  idPaciente: number;

  @IsInt()
  idTipoExamen: number;

  @IsString()
  resultado: string;

  @IsNumber()
  valorPagado: number;

  @IsOptional()
  @IsString()
  observaciones?: string;
}
