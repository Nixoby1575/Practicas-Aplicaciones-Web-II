import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TiposExamenService } from './tipos-examen.service';
import { TipoExamen } from './entities/tipos-examen.entity';
import { CreateTipoExamenInput } from './dto/create-tipos-examan.input';
import { UpdateTiposExamanInput } from './dto/update-tipos-examan.input';

@Resolver(() => TipoExamen)
export class TiposExamenResolver {
  constructor(private readonly tiposExamenService: TiposExamenService) {}

  @Mutation(() => TipoExamen)
  createTipoExamen(@Args('createTipoExamenInput') createTipoExamenInput: CreateTipoExamenInput) {
    return this.tiposExamenService.create(createTipoExamenInput);
  }

  @Query(() => [TipoExamen], { name: 'tiposExamen' })
  findAll(@Args('estado', { type: () => Boolean, nullable: true }) estado?: boolean) {
    return this.tiposExamenService.findAll(estado);
  }

  @Query(() => TipoExamen, { name: 'tipoExamen' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tiposExamenService.findOne(id);
  }

  @Mutation(() => TipoExamen)
  updateTipoExamen(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateTipoExamenInput') updateTipoExamenInput: UpdateTiposExamanInput,
  ) {
    return this.tiposExamenService.update(id, updateTipoExamenInput);
  }

  @Mutation(() => Boolean)
  removeTipoExamen(@Args('id', { type: () => Int }) id: number) {
    return this.tiposExamenService.remove(id);
  }

  @Mutation(() => Boolean)
  recoverTipoExamen(@Args('id', { type: () => Int }) id: number) {
    return this.tiposExamenService.recover(id);
  }
}
