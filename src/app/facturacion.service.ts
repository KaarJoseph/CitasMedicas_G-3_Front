import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facturacion } from './facturacion/facturacion.model';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {
  private apiUrl = 'http://127.0.0.1:8000/api/facturacion/';

  constructor(private http: HttpClient) { }

  obtenerFacturaciones(): Observable<Facturacion[]> {
    return this.http.get<Facturacion[]>(this.apiUrl);
  }

  obtenerFacturacion(id: number): Observable<Facturacion> {
    return this.http.get<Facturacion>(`${this.apiUrl}/${id}`);
  }

  crearFacturacion(facturacion: Facturacion): Observable<Facturacion> {
    return this.http.post<Facturacion>(this.apiUrl, facturacion);
  }

  actualizarFacturacion(id: number, facturacion: Facturacion): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}/`, facturacion);
  }

  eliminarFacturacion(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
