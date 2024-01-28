// prescripcion-orden-medica.component.ts

import { Component, OnInit } from '@angular/core';
import { PrescripcionOrdenMedica } from './prescripcion-orden-medica.model';
import { PrescripcionOrdenMedicaService } from '../prescripcion-orden-medica.service';
import { ConsultaMedica } from '../consulta-medica/consulta-medica.model'; // Asegúrate de que la ruta sea correcta
import { ConsultaMedicaService } from '../consulta-medica.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-prescripcion-orden-medica',
  templateUrl: './prescripcion-orden-medica.component.html',
  styleUrls: ['./prescripcion-orden-medica.component.scss']
})
export class PrescripcionOrdenMedicaComponent implements OnInit {
  prescripcionesOrdenesMedicas: PrescripcionOrdenMedica[] = [];
  prescripcionSeleccionada: PrescripcionOrdenMedica | null = null;
  editMode = false;
  consultasMedicas: ConsultaMedica[] = [];

  constructor(
    private prescripcionOrdenMedicaService: PrescripcionOrdenMedicaService,
    private consultaMedicaService: ConsultaMedicaService
  ) {}

  ngOnInit(): void {
    this.cargarPrescripcionesOrdenesMedicas();
    this.cargarConsultasMedicas();
  }

  cargarPrescripcionesOrdenesMedicas(): void {
    this.prescripcionOrdenMedicaService.obtenerPrescripcionesOrdenesMedicas().subscribe(prescripciones => {
      this.prescripcionesOrdenesMedicas = prescripciones;
    });
  }

  cargarConsultasMedicas(): void {
    this.consultaMedicaService.obtenerConsultasMedicas().subscribe(consultas => {
      this.consultasMedicas = consultas;
    });
  }

  seleccionarPrescripcionOrdenMedica(prescripcion: PrescripcionOrdenMedica): void {
    this.prescripcionSeleccionada = { ...prescripcion };
    this.editMode = true;
  }

  iniciarCreacionPrescripcionOrdenMedica(): void {
    this.prescripcionSeleccionada = {
      id: null,
      pres_ord_nombre_paciente: '',
      pres_ord_fecha_emision: new Date().toISOString().split('T')[0], // Fecha actual en formato YYYY-MM-DD
      pres_ord_detalles_prescripcion: '',
      pres_ord_estado_cumplimiento: '',
      consulta_medica: -1
    };
    this.editMode = false;
  }

  guardarPrescripcionOrdenMedica(): void {
    if (this.prescripcionSeleccionada) {
      if (this.editMode) {
        this.prescripcionOrdenMedicaService.actualizarPrescripcionOrdenMedica(this.prescripcionSeleccionada.id!, this.prescripcionSeleccionada)
          .subscribe(() => {
            this.cargarPrescripcionesOrdenesMedicas();
          });
      } else {
        this.prescripcionOrdenMedicaService.crearPrescripcionOrdenMedica(this.prescripcionSeleccionada)
          .subscribe(() => {
            this.cargarPrescripcionesOrdenesMedicas();
          });
      }
      this.prescripcionSeleccionada = null;
    }
  }

  eliminarPrescripcionOrdenMedica(id: number): void {
    this.prescripcionOrdenMedicaService.eliminarPrescripcionOrdenMedica(id).subscribe(() => {
      this.cargarPrescripcionesOrdenesMedicas();
    });
  }
}
