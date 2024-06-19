import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoExameneDto } from './create-tipo-examene.dto';

export class UpdateTipoExameneDto extends PartialType(CreateTipoExameneDto) {}
