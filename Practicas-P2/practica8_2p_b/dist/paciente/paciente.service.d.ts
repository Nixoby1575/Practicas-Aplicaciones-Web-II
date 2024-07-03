import { Repository } from 'typeorm';
import { Paciente } from './entities/paciente.entity';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
export declare class PacienteService {
    private readonly pacienteRepository;
    constructor(pacienteRepository: Repository<Paciente>);
    create(createPacienteDto: CreatePacienteDto): Promise<Paciente>;
    findAll(): Promise<Paciente[]>;
    findOne(id: number): Promise<Paciente>;
    update(id: number, updatePacienteDto: UpdatePacienteDto): Promise<Paciente>;
    remove(id: number): Promise<void>;
}
