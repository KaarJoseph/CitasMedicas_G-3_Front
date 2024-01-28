// prescripcion-orden-medica.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrescripcionOrdenMedica } from './prescripcion-orden-medica/prescripcion-orden-medica.model';

@Injectable({
  providedIn: 'root'
})
export class PrescripcionOrdenMedicaService {
  private apiUrl = 'http://127.0.0.1:8000/api/prescripcionordenmedica/';

  constructor(private http: HttpClient) { }

  obtenerPrescripcionesOrdenesMedicas(): Observable<PrescripcionOrdenMedica[]> {
    return this.http.get<PrescripcionOrdenMedica[]>(this.apiUrl);
  }

  obtenerPrescripcionOrdenMedica(id: number): Observable<PrescripcionOrdenMedica> {
    return this.http.get<PrescripcionOrdenMedica>(`${this.apiUrl}/${id}`);
  }

  crearPrescripcionOrdenMedica(prescripcion: PrescripcionOrdenMedica): Observable<PrescripcionOrdenMedica> {
    return this.http.post<PrescripcionOrdenMedica>(this.apiUrl, prescripcion);
  }

  actualizarPrescripcionOrdenMedica(id: number, prescripcion: PrescripcionOrdenMedica): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}/`, prescripcion);
  }

  eliminarPrescripcionOrdenMedica(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
