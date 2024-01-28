import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsultaMedica } from './consulta-medica/consulta-medica.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultaMedicaService {
  private apiUrl = 'http://127.0.0.1:8000/api/consultamedica/';

  constructor(private http: HttpClient) { }

  obtenerConsultasMedicas(): Observable<ConsultaMedica[]> {
    return this.http.get<ConsultaMedica[]>(this.apiUrl);
  }

  obtenerConsultaMedica(id: number): Observable<ConsultaMedica> {
    return this.http.get<ConsultaMedica>(`${this.apiUrl}/${id}`);
  }

  crearConsultaMedica(consulta: ConsultaMedica): Observable<ConsultaMedica> {
    return this.http.post<ConsultaMedica>(this.apiUrl, consulta);
  }

  actualizarConsultaMedica(id: number, consulta: ConsultaMedica): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}/`, consulta);
  }

  eliminarConsultaMedica(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
