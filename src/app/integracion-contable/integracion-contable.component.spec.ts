import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegracionContableComponent } from './integracion-contable.component';

describe('IntegracionContableComponent', () => {
  let component: IntegracionContableComponent;
  let fixture: ComponentFixture<IntegracionContableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntegracionContableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntegracionContableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
