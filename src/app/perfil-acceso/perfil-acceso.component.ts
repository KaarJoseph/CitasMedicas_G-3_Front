import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/Usuario.model';
import { perfilAcceso } from './perfil-acceso.model';
import { UsuarioService } from '../usuario.service';
import { PerfilAccesoService } from '../perfil-acceso.service';

@Component({
  selector: 'app-perfil-acceso',
  templateUrl: './perfil-acceso.component.html',
  styleUrls: ['./perfil-acceso.component.scss']
})
export class PerfilAccesoComponent implements OnInit {
  perfilesdeacceso: perfilAcceso[] = [];
  usuarios: Usuario[] = [];
  editMode = false;
  perfilAccesoSeleccionado: perfilAcceso | null = null;

  constructor(
    private usuarioService: UsuarioService,
    private perfilAccesoService: PerfilAccesoService
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();
    this.cargarPerfilesAcceso();
  }

  cargarUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  cargarPerfilesAcceso(): void {
    this.perfilAccesoService.obtenerPerfilesAcceso().subscribe(perfiles => {
      this.perfilesdeacceso = perfiles;
    });
  }

  seleccionarPerfilAcceso(perfil: perfilAcceso): void {
    this.perfilAccesoSeleccionado = { ...perfil };
    this.editMode = true;
  }

  iniciarCreacionPerfilAcceso(): void {
    this.perfilAccesoSeleccionado = {
      id: null,
      perf_acc_nivel_acceso: '',
      usuario: -1 
    };
    this.editMode = false;
  }

  guardarPerfilAcceso(): void {
    if (this.perfilAccesoSeleccionado) {
      if (this.editMode && this.perfilAccesoSeleccionado.id != null) {
        this.perfilAccesoService.actualizarPerfilAcceso(this.perfilAccesoSeleccionado.id, this.perfilAccesoSeleccionado)
          .subscribe(() => {
            this.cargarPerfilesAcceso();
          });
      } else if (!this.editMode) {
        this.perfilAccesoService.crearPerfilAcceso(this.perfilAccesoSeleccionado)
          .subscribe(() => {
            this.cargarPerfilesAcceso();
          });
      }
      this.perfilAccesoSeleccionado = null;
      this.editMode = false;
    }
  }

  eliminarPerfilAcceso(id: number): void {
    this.perfilAccesoService.eliminarPerfilAcceso(id).subscribe(() => {
      this.cargarPerfilesAcceso();
    });
  }
}
