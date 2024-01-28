// certificado.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certificado } from './certificado/certificado.model';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {
  private apiUrl = 'http://127.0.0.1:8000/api/certificado/';

  constructor(private http: HttpClient) { }

  obtenerCertificados(): Observable<Certificado[]> {
    return this.http.get<Certificado[]>(this.apiUrl);
  }

  obtenerCertificado(id: number): Observable<Certificado> {
    return this.http.get<Certificado>(`${this.apiUrl}/${id}`);
  }

  crearCertificado(certificado: Certificado): Observable<Certificado> {
    return this.http.post<Certificado>(this.apiUrl, certificado);
  }

  actualizarCertificado(id: number, certificado: Certificado): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}/`, certificado);
  }

  eliminarCertificado(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
