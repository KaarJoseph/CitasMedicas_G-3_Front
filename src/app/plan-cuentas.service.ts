// plan-cuentas.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanCuentas } from './plan-cuentas/plan-cuentas.model';

@Injectable({
  providedIn: 'root'
})
export class PlanCuentasService {
  private apiUrl = 'http://127.0.0.1:8000/api/plancuentas/';

  constructor(private http: HttpClient) { }

  obtenerPlanCuentas(): Observable<PlanCuentas[]> {
    return this.http.get<PlanCuentas[]>(this.apiUrl);
  }

  obtenerPlanCuentasPorId(id: number): Observable<PlanCuentas> {
    return this.http.get<PlanCuentas>(`${this.apiUrl}/${id}`);
  }

  crearPlanCuentas(planCuentas: PlanCuentas): Observable<PlanCuentas> {
    return this.http.post<PlanCuentas>(this.apiUrl, planCuentas);
  }

  actualizarPlanCuentas(id: number, planCuentas: PlanCuentas): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}/`, planCuentas);
  }

  eliminarPlanCuentas(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
