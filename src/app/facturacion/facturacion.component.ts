import { Component, OnInit } from '@angular/core';
import { Facturacion } from './facturacion.model';
import { FacturacionService } from '../facturacion.service';
import { Paciente } from '../paciente/paciente.model';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']
})
export class FacturacionComponent implements OnInit {
  facturaciones: Facturacion[] = [];
  facturaSeleccionada: Facturacion | null = null;
  editMode = false;
  pacientes: Paciente[] = [];

  constructor(
    private facturacionService: FacturacionService,
    private pacienteService: PacienteService // Asegúrate de inyectar este servicio
  ) {}

  ngOnInit(): void {
    this.cargarFacturaciones();
    this.cargarPacientes();
  }

  cargarPacientes(): void {
    this.pacienteService.obtenerPacientes().subscribe(pacientes => {
      this.pacientes = pacientes;
    });
  }

  cargarFacturaciones(): void {
    this.facturacionService.obtenerFacturaciones().subscribe(facturas => {
      this.facturaciones = facturas;
    });
  }

  seleccionarFactura(factura: Facturacion): void {
    this.facturaSeleccionada = {...factura};
    this.editMode = true;
  }

  iniciarCreacionFactura(): void {
    this.facturaSeleccionada = {
      fact_nombre_paciente: '',
      fact_numero_identificacion: '',
      fact_numero_poliza_seguro: '',
      fact_detalles_facturacion: '',
      fact_estado_pago: '',
      fact_metodo_pago: '',
      paciente: -1
    };
    this.editMode = false;
  }

  guardarFactura(): void {
    if (this.facturaSeleccionada) {
      if (this.editMode && this.facturaSeleccionada.id != null) {
        // Solo actualiza si estamos en modo edición y el id es válido
        this.facturacionService.actualizarFacturacion(this.facturaSeleccionada.id, this.facturaSeleccionada)
          .subscribe(() => {
            this.cargarFacturaciones();
          });
      } else {
        // Crear una nueva factura
        this.facturacionService.crearFacturacion(this.facturaSeleccionada)
          .subscribe(() => {
            this.cargarFacturaciones();
          });
      }
      this.facturaSeleccionada = null;
    }
  }

  eliminarFactura(id: number | null | undefined): void {
    if (id !== null && id !== undefined) {
      // Llamar al servicio para eliminar la factura
      this.facturacionService.eliminarFacturacion(id).subscribe(() => {
        // Recargar la lista de facturaciones o manejar la respuesta
      });
    }
  }
  
}
