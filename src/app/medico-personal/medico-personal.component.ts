import { Component, OnInit } from '@angular/core';
import { MedicoPersonalService } from '../medico-personal.service';
import { MedicoPersonal } from './medico-personal.model';

@Component({
  selector: 'app-medico-personal',
  templateUrl: './medico-personal.component.html',
  styleUrls: ['./medico-personal.component.scss']
})
export class MedicoPersonalComponent implements OnInit {
  medicos: MedicoPersonal[] = [];
  medicoSeleccionado: MedicoPersonal | null = null;
  nuevoMedicoPersonal: MedicoPersonal = {
    id: 0,
    med_per_nombre_completo: '',
    med_per_credenciales: '',
    med_per_especialidades: '',
    med_per_horarios_consulta: '',
    med_per_informacion_contacto: ''
  };

  constructor(private medicoPersonalService: MedicoPersonalService) { }

  ngOnInit(): void {
    this.obtenerMedicosPersonales();
  }

  obtenerMedicosPersonales(): void {
    this.medicoPersonalService.obtenerMedicosPersonales().subscribe((data) => {
      this.medicos = data;
    });
  }

  seleccionarMedicoPersonal(medico: MedicoPersonal): void {
    this.medicoSeleccionado = medico;
    this.nuevoMedicoPersonal = { ...medico };
  }

  crearMedicoPersonal(): void {
    if (!this.medicoSeleccionado) {
      this.medicoPersonalService.crearMedicoPersonal(this.nuevoMedicoPersonal).subscribe((medico) => {
        this.medicos.push(medico);
        this.limpiarFormulario();
      });
    } else {
      this.actualizarMedicoPersonal();
    }
  }

  actualizarMedicoPersonal(): void {
    if (this.medicoSeleccionado) {
      this.medicoPersonalService.actualizarMedicoPersonal(this.medicoSeleccionado.id, this.nuevoMedicoPersonal).subscribe(() => {
        this.obtenerMedicosPersonales();
        this.limpiarFormulario();
      });
    }
  }

  eliminarMedicoPersonal(): void {
    if (this.medicoSeleccionado) {
      const medicoId = this.medicoSeleccionado.id;
      this.medicoPersonalService.eliminarMedicoPersonal(medicoId).subscribe(() => {
        this.medicos = this.medicos.filter(medico => medico.id !== medicoId);
        this.limpiarFormulario();
      });
    }
  }

  limpiarFormulario(): void {
    this.nuevoMedicoPersonal = {
      id: 0,
      med_per_nombre_completo: '',
      med_per_credenciales: '',
      med_per_especialidades: '',
      med_per_horarios_consulta: '',
      med_per_informacion_contacto: ''
    };
    this.medicoSeleccionado = null;
  }
}
