import { Component, OnInit } from '@angular/core';
import { PlanCuentas } from './plan-cuentas.model';
import { PlanCuentasService } from '../plan-cuentas.service';
import { ConsultaMedicaService } from '../consulta-medica.service';
import { ConsultaMedica } from '../consulta-medica/consulta-medica.model';

@Component({
  selector: 'app-plan-cuentas',
  templateUrl: './plan-cuentas.component.html',
  styleUrls: ['./plan-cuentas.component.scss']
})
export class PlanCuentasComponent implements OnInit {
  planCuentasList: PlanCuentas[] = [];
  planCuentasSeleccionado: PlanCuentas | null = null;
  consultasMedicas: ConsultaMedica[] = [];
  editMode = false;

  constructor(
    private planCuentasService: PlanCuentasService,
    private consultaMedicaService: ConsultaMedicaService
  ) {}

  ngOnInit(): void {
    this.cargarPlanCuentas();
    this.cargarConsultasMedicas();
  }

  cargarPlanCuentas(): void {
    this.planCuentasService.obtenerPlanCuentas().subscribe(planCuentas => {
      this.planCuentasList = planCuentas;
    });
  }

  cargarConsultasMedicas(): void {
    this.consultaMedicaService.obtenerConsultasMedicas().subscribe(consultas => {
      this.consultasMedicas = consultas;
    });
  }

  seleccionarPlanCuentas(planCuentas: PlanCuentas): void {
    this.planCuentasSeleccionado = { ...planCuentas };
    this.editMode = true;
  }

  iniciarCreacionPlanCuentas(): void {
    this.planCuentasSeleccionado = {
      id: null,
      // Inicializa aquí el resto de los campos con valores por defecto
      plan_cue_categoria_gasto_ingreso: '',
      plan_cue_cuenta_destino: '',
      plan_cue_datos_proveedor_cliente: '',
      plan_cue_descripcion: '',
      plan_cue_fecha_transaccion: '',
      plan_cue_metodo_pago: '',
      plan_cue_monto: 0,
      plan_cue_numero_referencia: '',
      plan_cue_tipo_transaccion: '',
      consulta_medica: -1
    };
    this.editMode = false;
  }

  guardarPlanCuentas(): void {
    if (this.planCuentasSeleccionado) {
      if (this.editMode && this.planCuentasSeleccionado.id != null) {
        this.planCuentasService.actualizarPlanCuentas(this.planCuentasSeleccionado.id, this.planCuentasSeleccionado)
          .subscribe(() => {
            this.cargarPlanCuentas();
          });
      } else if (!this.editMode) {
        this.planCuentasService.crearPlanCuentas(this.planCuentasSeleccionado)
          .subscribe(() => {
            this.cargarPlanCuentas();
          });
      }
      this.planCuentasSeleccionado = null;
      this.editMode = false;
    } 
  }

  eliminarPlanCuentas(id: number): void {
    this.planCuentasService.eliminarPlanCuentas(id).subscribe(() => {
      this.cargarPlanCuentas();
    });
  }
}
