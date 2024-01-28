import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAccesoComponent } from './perfil-acceso.component';

describe('PerfilAccesoComponent', () => {
  let component: PerfilAccesoComponent;
  let fixture: ComponentFixture<PerfilAccesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilAccesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
