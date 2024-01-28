// integracion-contable.component.ts

import { Component, OnInit } from '@angular/core';
import { IntegracionContable } from './integracion-contable.model';
import { IntegracionContableService } from '../integracion-contable.service';
import { PlanCuentas } from '../plan-cuentas/plan-cuentas.model'; // Asegúrate de que la ruta sea correcta
import { PlanCuentasService } from '../plan-cuentas.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-integracion-contable',
  templateUrl: './integracion-contable.component.html',
  styleUrls: ['./integracion-contable.component.scss']
})
export class IntegracionContableComponent implements OnInit {
  integracionesContables: IntegracionContable[] = [];
  integracionSeleccionada: IntegracionContable | null = null;
  editMode = false;
  planCuentas: PlanCuentas[] = [];

  constructor(
    private integracionContableService: IntegracionContableService,
    private planCuentasService: PlanCuentasService
  ) {}

  ngOnInit(): void {
    this.cargarIntegracionesContables();
    this.cargarPlanCuentas();
  }

  cargarIntegracionesContables(): void {
    this.integracionContableService.obtenerIntegracionesContables().subscribe(integraciones => {
      this.integracionesContables = integraciones;
    });
  }

  cargarPlanCuentas(): void {
    this.planCuentasService.obtenerPlanCuentas().subscribe(planCuentas => {
      this.planCuentas = planCuentas;
    });
  }

  seleccionarIntegracionContable(integracion: IntegracionContable): void {
    this.integracionSeleccionada = { ...integracion };
    this.editMode = true;
  }

  iniciarCreacionIntegracionContable(): void {
    this.integracionSeleccionada = {
      id: null,
      integ_cont_datos_financieros: '',
      plan_cuentas: -1
    };
    this.editMode = false;
  }

  guardarIntegracionContable(): void {
    if (this.integracionSeleccionada) {
      if (this.editMode) {
        this.integracionContableService.actualizarIntegracionContable(this.integracionSeleccionada.id!, this.integracionSeleccionada)
          .subscribe(() => {
            this.cargarIntegracionesContables();
          });
      } else {
        this.integracionContableService.crearIntegracionContable(this.integracionSeleccionada)
          .subscribe(() => {
            this.cargarIntegracionesContables();
          });
      }
      this.integracionSeleccionada = null;
    }
  }

  eliminarIntegracionContable(id: number): void {
    this.integracionContableService.eliminarIntegracionContable(id).subscribe(() => {
      this.cargarIntegracionesContables();
    });
  }
}
