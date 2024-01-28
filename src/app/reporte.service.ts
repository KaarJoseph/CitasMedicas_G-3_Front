// reporte.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reporte } from './reporte/reporte.model';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private apiUrl = 'http://127.0.0.1:8000/api/reporte/';

  constructor(private http: HttpClient) { }

  obtenerReportes(): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(this.apiUrl);
  }

  obtenerReporte(id: number): Observable<Reporte> {
    return this.http.get<Reporte>(`${this.apiUrl}/${id}`);
  }

  crearReporte(reporte: Reporte): Observable<Reporte> {
    return this.http.post<Reporte>(this.apiUrl, reporte);
  }

  actualizarReporte(id: number, reporte: Reporte): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}/`, reporte);
  }

  eliminarReporte(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
