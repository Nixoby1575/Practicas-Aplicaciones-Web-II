import { CreateTipoExamenInput } from './create-tipos-examan.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTiposExamanInput extends PartialType(CreateTipoExamenInput) {
  @Field(() => Int)
  id: number;
}
