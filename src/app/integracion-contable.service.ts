// integracion-contable.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IntegracionContable } from './integracion-contable/integracion-contable.model';

@Injectable({
  providedIn: 'root'
})
export class IntegracionContableService {
  private apiUrl = 'http://127.0.0.1:8000/api/integracioncontable/';

  constructor(private http: HttpClient) { }

  obtenerIntegracionesContables(): Observable<IntegracionContable[]> {
    return this.http.get<IntegracionContable[]>(this.apiUrl);
  }

  obtenerIntegracionContable(id: number): Observable<IntegracionContable> {
    return this.http.get<IntegracionContable>(`${this.apiUrl}/${id}`);
  }

  crearIntegracionContable(integracion: IntegracionContable): Observable<IntegracionContable> {
    return this.http.post<IntegracionContable>(this.apiUrl, integracion);
  }

  actualizarIntegracionContable(id: number, integracion: IntegracionContable): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}/`, integracion);
  }

  eliminarIntegracionContable(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
