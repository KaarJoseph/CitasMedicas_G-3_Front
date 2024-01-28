import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './paciente/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private apiUrl = 'http://127.0.0.1:8000/api/paciente/'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  obtenerPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.apiUrl);
  }

  obtenerPaciente(id: number): Observable<Paciente> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.get<Paciente>(url);
  }

  crearPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.apiUrl, paciente);
  }

  actualizarPaciente(id: number, paciente: Paciente): Observable<any> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.put(url, paciente);
  }

  eliminarPaciente(id: number): Observable<any> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.delete(url);
  }
}
