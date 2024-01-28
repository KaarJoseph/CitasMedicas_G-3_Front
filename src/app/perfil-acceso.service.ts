import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { perfilAcceso } from './perfil-acceso/perfil-acceso.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilAccesoService {
  private apiUrl = 'http://127.0.0.1:8000/api/perfilacceso/';

  constructor(private http: HttpClient) { }

  obtenerPerfilesAcceso(): Observable<perfilAcceso[]> {
    return this.http.get<perfilAcceso[]>(this.apiUrl);
  }

  obtenerPerfilAcceso(id: number): Observable<perfilAcceso> {
    return this.http.get<perfilAcceso>(`${this.apiUrl}/${id}`);
  }

  crearPerfilAcceso(perfil: perfilAcceso): Observable<perfilAcceso> {
    return this.http.post<perfilAcceso>(this.apiUrl, perfil);
  }

  actualizarPerfilAcceso(id: number, perfil: perfilAcceso): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}/`, perfil);
  }

  eliminarPerfilAcceso(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}`);
  }


}
