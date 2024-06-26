import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTipoExamenInput {
  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsString()
  indicaciones: string;
}
