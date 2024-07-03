import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
export declare class PacienteGateway {
    private readonly pacienteService;
    constructor(pacienteService: PacienteService);
    create(createPacienteDto: CreatePacienteDto): Promise<import("./entities/paciente.entity").Paciente>;
    findAll(): Promise<import("./entities/paciente.entity").Paciente[]>;
    findOne(id: number): Promise<import("./entities/paciente.entity").Paciente>;
    update(updatePacienteDto: UpdatePacienteDto): Promise<import("./entities/paciente.entity").Paciente>;
    remove(id: number): Promise<void>;
}
