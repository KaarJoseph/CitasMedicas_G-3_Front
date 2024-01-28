import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from './Usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuarioSeleccionado: Usuario | null = null;
  nuevoUsuario: Usuario = {
    id: 0,
    usu_cedula: '',
    usu_nombre_completo: '',
    usu_numero_telefono: '',
    usu_correo_electronico: '',
    usu_direccion: ''
  };

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  seleccionarUsuario(usuario: Usuario): void {
    this.usuarioSeleccionado = usuario;
    this.nuevoUsuario = { ...usuario };
  }

  crearUsuario(): void {
    if (!this.usuarioSeleccionado) {
      this.usuarioService.crearUsuario(this.nuevoUsuario).subscribe((usuario) => {
        this.usuarios.push(usuario);
        this.limpiarFormulario();
      });
    }
  }

  actualizarUsuario(): void {
    if (this.usuarioSeleccionado) {
      this.usuarioService.actualizarUsuario(this.nuevoUsuario.id, this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.limpiarFormulario();
      });
    }
  }

  eliminarUsuario(): void {
    if (this.usuarioSeleccionado) {
      const userId = this.usuarioSeleccionado.id;
      this.usuarioService.eliminarUsuario(userId).subscribe(() => {
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== userId);
        this.limpiarFormulario();
      });
    }
  }

  limpiarFormulario(): void {
    this.nuevoUsuario = {
      id: 0,
      usu_cedula: '',
      usu_nombre_completo: '',
      usu_numero_telefono: '',
      usu_correo_electronico: '',
      usu_direccion: ''
    };
    this.usuarioSeleccionado = null;
  }
}
