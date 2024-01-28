// certificado.component.ts

import { Component, OnInit } from '@angular/core';
import { Certificado } from './certificado.model';
import { CertificadoService } from '../certificado.service';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.scss']
})
export class CertificadoComponent implements OnInit {
  certificados: Certificado[] = [];
  certificadoSeleccionado: Certificado | null = null;
  editMode = false;

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    this.cargarCertificados();
  }

  cargarCertificados(): void {
    this.certificadoService.obtenerCertificados().subscribe(certificados => {
      this.certificados = certificados;
    });
  }

  seleccionarCertificado(certificado: Certificado): void {
    this.certificadoSeleccionado = { ...certificado };
    this.editMode = true;
  }

  iniciarCreacionCertificado(): void {
    this.certificadoSeleccionado = {
      id: null,
      cert_titulo: '',
      cert_emisor: '',
      cert_receptor: '',
      cert_fecha_emision: '',
      cert_descripcion: ''
    };
    this.editMode = false;
  }

  guardarCertificado(): void {
    if (this.certificadoSeleccionado) {
      if (this.editMode) {
        this.certificadoService.actualizarCertificado(this.certificadoSeleccionado.id!, this.certificadoSeleccionado)
          .subscribe(() => {
            this.cargarCertificados();
          });
      } else {
        this.certificadoService.crearCertificado(this.certificadoSeleccionado)
          .subscribe(() => {
            this.cargarCertificados();
          });
      }
      this.certificadoSeleccionado = null;
    }
  }

  eliminarCertificado(id: number): void {
    this.certificadoService.eliminarCertificado(id).subscribe(() => {
      this.cargarCertificados();
    });
  }
}
