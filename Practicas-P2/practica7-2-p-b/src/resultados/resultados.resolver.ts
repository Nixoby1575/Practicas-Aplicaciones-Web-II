import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ResultadosService } from './resultados.service';
import { Resultado } from './entities/resultado.entity';
import { CreateResultadoInput } from './dto/create-resultado.input';
import { UpdateResultadoInput } from './dto/update-resultado.input';

@Resolver(() => Resultado)
export class ResultadosResolver {
  constructor(private readonly resultadosService: ResultadosService) {}

  @Mutation(() => Resultado)
  createResultado(@Args('createResultadoInput') createResultadoInput: CreateResultadoInput) {
    return this.resultadosService.create(createResultadoInput);
  }

  @Query(() => [Resultado], { name: 'resultados' })
  findAll(@Args('estado', { type: () => Boolean, nullable: true }) estado?: boolean) {
    return this.resultadosService.findAll(estado);
  }

  @Query(() => Resultado, { name: 'resultado' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.resultadosService.findOne(id);
  }

  @Mutation(() => Resultado)
  updateResultado(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateResultadoInput') updateResultadoInput: UpdateResultadoInput,
  ) {
    return this.resultadosService.update(id, updateResultadoInput);
  }

  @Mutation(() => Boolean)
  removeResultado(@Args('id', { type: () => Int }) id: number) {
    return this.resultadosService.remove(id);
  }

  @Mutation(() => Boolean)
  recoverResultado(@Args('id', { type: () => Int }) id: number) {
    return this.resultadosService.recover(id);
  }
}
