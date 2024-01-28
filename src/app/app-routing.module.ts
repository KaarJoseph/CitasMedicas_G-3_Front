import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { InicioComponent } from './inicio/inicio.component'; 
import { MedicoPersonalComponent } from './medico-personal/medico-personal.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ConsultaMedicaComponent } from './consulta-medica/consulta-medica.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { PlanCuentasComponent } from './plan-cuentas/plan-cuentas.component';
import { PerfilAccesoComponent } from './perfil-acceso/perfil-acceso.component';
import { ReporteComponent } from './reporte/reporte.component';
import { IntegracionContableComponent } from './integracion-contable/integracion-contable.component';
import { PrescripcionOrdenMedicaComponent } from './prescripcion-orden-medica/prescripcion-orden-medica.component';
import { CertificadoComponent } from './certificado/certificado.component';


const routes: Routes = [
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'medico-personal', component: MedicoPersonalComponent },
  { path: 'paciente', component: PacienteComponent },	
  { path: 'consulta-medica', component: ConsultaMedicaComponent },
  { path: 'facturacion', component: FacturacionComponent },
  { path: 'plan-cuentas', component: PlanCuentasComponent },
  { path: 'perfil-acceso', component: PerfilAccesoComponent },
  { path: 'reporte', component: ReporteComponent },
  { path: 'integracion-contable', component: IntegracionContableComponent },
  { path: 'prescripcion-orden-medica', component: PrescripcionOrdenMedicaComponent },
  { path: 'certificado', component: CertificadoComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
