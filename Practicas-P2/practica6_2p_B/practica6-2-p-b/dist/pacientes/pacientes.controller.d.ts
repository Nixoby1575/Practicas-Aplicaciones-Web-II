import { PacientesService } from './pacientes.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
export declare class PacientesController {
    private readonly pacientesService;
    constructor(pacientesService: PacientesService);
    findAll(): Promise<import("./entities/paciente.entity").Paciente[]>;
    findOne(id: string): Promise<import("./entities/paciente.entity").Paciente>;
    create(createPacienteDto: CreatePacienteDto): Promise<import("./entities/paciente.entity").Paciente>;
    update(id: string, updatePacienteDto: UpdatePacienteDto): Promise<import("./entities/paciente.entity").Paciente>;
    remove(id: string): Promise<void>;
    recover(id: string): Promise<void>;
}
