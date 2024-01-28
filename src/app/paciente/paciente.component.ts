import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { MedicoPersonalService } from '../medico-personal.service';
import { Paciente } from './paciente.model';
import { MedicoPersonal } from '../medico-personal/medico-personal.model';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {
  pacientes: Paciente[] = [];
  medicos: MedicoPersonal[] = [];
  nuevoPaciente: Paciente = {
    id: 0, // Debes asignar un ID válido, si estás creando un nuevo paciente, esto podría ser 0
    pac_nombre_completo: '',
    pac_fecha_nacimiento: "", // Inicializa con una fecha válida
    pac_genero: '',
    pac_direccion: '',
    pac_numero_telefono: '',
    pac_correo_electronico: '',
    medico_personal: null 
  };
  pacienteSeleccionado: Paciente | null = null;

  constructor(
    private pacienteService: PacienteService,
    private medicoPersonalService: MedicoPersonalService
  ) { }

  ngOnInit() {
    this.obtenerPacientes();
    this.obtenerMedicosPersonales();
  }

  obtenerPacientes() {
    this.pacienteService.obtenerPacientes().subscribe((data: Paciente[]) => {
      this.pacientes = data;
    });
  }

  obtenerMedicosPersonales() {
    this.medicoPersonalService.obtenerMedicosPersonales().subscribe((data: MedicoPersonal[]) => {
      this.medicos = data;
      console.log("Médicos cargados:", this.medicos); 
    });
  }

  crearPaciente() {
    // Lógica para crear un nuevo paciente
    console.log(this.nuevoPaciente);

    this.pacienteService.crearPaciente(this.nuevoPaciente).subscribe((data: any) => {
      
      this.obtenerPacientes();
      
      
      this.nuevoPaciente = {
        id: 0,
        pac_nombre_completo: '',
        pac_fecha_nacimiento: "",
        pac_genero: '',
        pac_direccion: '',
        pac_numero_telefono: '',
        pac_correo_electronico: '',
        medico_personal: null
        
      };
      
    });
    
  }

  actualizarPaciente() {
    if (this.pacienteSeleccionado) {
      // Lógica para actualizar un paciente
      this.pacienteService.actualizarPaciente(this.pacienteSeleccionado.id, this.pacienteSeleccionado).subscribe((data: any) => {
        this.obtenerPacientes();
        this.pacienteSeleccionado = null;
      });
    }
  }

  seleccionarPaciente(paciente: Paciente) {
    this.pacienteSeleccionado = { ...paciente };
  }

  eliminarPaciente(paciente: Paciente) {
    // Lógica para eliminar un paciente
    this.pacienteService.eliminarPaciente(paciente.id).subscribe((data: any) => {
      this.obtenerPacientes();
    });
  }
}
