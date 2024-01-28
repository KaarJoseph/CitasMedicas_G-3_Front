import { Component, OnInit } from '@angular/core';
import { ConsultaMedica } from './consulta-medica.model';
import { ConsultaMedicaService } from '../consulta-medica.service';
import { MedicoPersonalService } from '../medico-personal.service';
import { PacienteService } from '../paciente.service';
import { MedicoPersonal } from '../medico-personal/medico-personal.model';
import { Paciente } from '../paciente/paciente.model';

@Component({
  selector: 'app-consulta-medica',
  templateUrl: './consulta-medica.component.html',
  styleUrls: ['./consulta-medica.component.scss']
})
export class ConsultaMedicaComponent implements OnInit {
  consultasMedicas: ConsultaMedica[] = [];
  consultaSeleccionada: ConsultaMedica | null = null;
  editMode = false;

  medicos: MedicoPersonal[] = [];
  pacientes: Paciente[] = [];

  constructor(
    private consultaMedicaService: ConsultaMedicaService,
    private medicoPersonalService: MedicoPersonalService,
    private pacienteService: PacienteService
  ) {}

  ngOnInit(): void {
    this.cargarConsultasMedicas();
    this.cargarMedicosPersonales();
    this.cargarPacientes();
  }

  cargarMedicosPersonales(): void {
    this.medicoPersonalService.obtenerMedicosPersonales().subscribe(medicos => {
      this.medicos = medicos;
    });
  }

  cargarPacientes(): void {
    this.pacienteService.obtenerPacientes().subscribe(pacientes => {
      this.pacientes = pacientes;
    });
  }

  cargarConsultasMedicas(): void {
    this.consultaMedicaService.obtenerConsultasMedicas().subscribe(consultas => {
      this.consultasMedicas = consultas;
    });
  }

  seleccionarConsulta(consulta: ConsultaMedica): void {
    this.consultaSeleccionada = {...consulta};
    this.editMode = true;
  }

  iniciarCreacionConsulta(): void {
    this.consultaSeleccionada = {
      id: null,
      con_med_medico_personal: -1,
      con_med_paciente: -1,
      con_med_diagnostico: '',
      con_med_recomendaciones: ''
    };
    this.editMode = false;
  }

  guardarConsulta(): void {
    if (this.consultaSeleccionada) {
      if (this.editMode && this.consultaSeleccionada.id != null) {
        
        this.consultaMedicaService.actualizarConsultaMedica(this.consultaSeleccionada.id, this.consultaSeleccionada)
          .subscribe(() => {
            this.cargarConsultasMedicas();
          });
      } else if (!this.editMode) {
        // Crear una nueva consulta
        this.consultaMedicaService.crearConsultaMedica(this.consultaSeleccionada)
          .subscribe(() => {
            this.cargarConsultasMedicas();
          });
      }
      this.consultaSeleccionada = null;
      this.editMode = false;
    }
  }
  eliminarConsulta(id: number): void {
    this.consultaMedicaService.eliminarConsultaMedica(id).subscribe(() => {
      this.cargarConsultasMedicas();
    });
  }
}
