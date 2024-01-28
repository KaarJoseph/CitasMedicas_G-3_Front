import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescripcionOrdenMedicaComponent } from './prescripcion-orden-medica.component';

describe('PrescripcionOrdenMedicaComponent', () => {
  let component: PrescripcionOrdenMedicaComponent;
  let fixture: ComponentFixture<PrescripcionOrdenMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrescripcionOrdenMedicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrescripcionOrdenMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
