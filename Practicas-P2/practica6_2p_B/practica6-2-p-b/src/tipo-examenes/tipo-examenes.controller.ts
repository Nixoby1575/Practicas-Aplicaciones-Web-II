import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
import { TipoExamenesService } from './tipo-examenes.service';
import { CreateTipoExameneDto } from './dto/create-tipo-examene.dto';
import { UpdateTipoExameneDto } from './dto/update-tipo-examene.dto';

@Controller('tipo-examenes')
export class TipoExamenesController {
  constructor(private readonly tipoExamenesService: TipoExamenesService) {}

  @Get()
  findAll() {
    return this.tipoExamenesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoExamenesService.findOne(+id);
  }

  @Post()
  create(@Body() createTipoExamenDto: CreateTipoExameneDto) {
    return this.tipoExamenesService.create(createTipoExamenDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTipoExamenDto: UpdateTipoExameneDto) {
    return this.tipoExamenesService.update(+id, updateTipoExamenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoExamenesService.remove(+id);
  }

  @Patch('recover/:id')
  recover(@Param('id') id: string) {
    return this.tipoExamenesService.recover(+id);
  }
}
