import { IsString } from 'class-validator';

export class CreateTipoExameneDto {
  @IsString()
  descripcion: string;

  @IsString()
  indicaciones: string;
}
