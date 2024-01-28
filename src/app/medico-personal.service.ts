import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicoPersonal } from './medico-personal/medico-personal.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoPersonalService {
  private apiUrl = "http://127.0.0.1:8000/api/medicopersonal/"; // Reemplaza con la URL correcta de tu API

  constructor(private http: HttpClient) { }

  obtenerMedicosPersonales(): Observable<MedicoPersonal[]> {
    return this.http.get<MedicoPersonal[]>(this.apiUrl);
  }

  obtenerMedicoPersonalPorId(id: number): Observable<MedicoPersonal> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.get<MedicoPersonal>(url);
  }

  crearMedicoPersonal(medico: MedicoPersonal): Observable<MedicoPersonal> {
    return this.http.post<MedicoPersonal>(this.apiUrl, medico);
  }

  actualizarMedicoPersonal(id: number, medico: MedicoPersonal): Observable<MedicoPersonal> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.put<MedicoPersonal>(url, medico);
  }

  eliminarMedicoPersonal(id: number): Observable<void> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.delete<void>(url);
  }
}
