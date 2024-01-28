import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Importa los módulos de Angular Material que necesitas
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
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

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    InicioComponent,
    MedicoPersonalComponent,
    PacienteComponent,
    ConsultaMedicaComponent,
    FacturacionComponent,
    PlanCuentasComponent,
    PerfilAccesoComponent,
    ReporteComponent,
    IntegracionContableComponent,
    PrescripcionOrdenMedicaComponent,
    CertificadoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    // Agrega los módulos de Angular Material aquí
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
