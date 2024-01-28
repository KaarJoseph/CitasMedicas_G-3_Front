// reporte.component.ts

import { Component, OnInit } from '@angular/core';
import { Reporte } from './reporte.model';
import { ReporteService } from '../reporte.service';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario/Usuario.model';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {
  reportes: Reporte[] = [];
  usuarios: Usuario[] = []; // Agrega esto
  reporteSeleccionado: Reporte | null = null;
  editMode = false;

  constructor(
    private reporteService: ReporteService,
    private usuarioService: UsuarioService // Asegúrate de inyectar el UsuarioService
  ) {}

  ngOnInit(): void {
    this.cargarReportes();
    this.cargarUsuarios(); // Carga los usuarios
  }

  cargarUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  cargarReportes(): void {
    this.reporteService.obtenerReportes().subscribe(reportes => {
      this.reportes = reportes;
    });
  }

  seleccionarReporte(reporte: Reporte): void {
    this.reporteSeleccionado = { ...reporte };
    this.editMode = true;
  }

  iniciarCreacionReporte(): void {
    this.reporteSeleccionado = {
      id: null,
      rep_tipo_reporte: '',
      rep_parametros: '',
      usuario: -1 // Asumiendo que es un ID de usuario
    };
    this.editMode = false;
  }

  guardarReporte(): void {
    if (this.reporteSeleccionado) {
      if (this.editMode) {
        // Actualizar el reporte existente
        this.reporteService.actualizarReporte(this.reporteSeleccionado.id!, this.reporteSeleccionado)
          .subscribe(() => {
            this.cargarReportes();
          });
      } else {
        // Crear un nuevo reporte
        this.reporteService.crearReporte(this.reporteSeleccionado)
          .subscribe(() => {
            this.cargarReportes();
          });
      }
      this.reporteSeleccionado = null;
    }
  }

  eliminarReporte(id: number): void {
    this.reporteService.eliminarReporte(id).subscribe(() => {
      this.cargarReportes();
    });
  }
}
