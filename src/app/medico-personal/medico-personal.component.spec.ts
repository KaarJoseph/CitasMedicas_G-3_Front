import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoPersonalComponent } from './medico-personal.component';

describe('MedicoPersonalComponent', () => {
  let component: MedicoPersonalComponent;
  let fixture: ComponentFixture<MedicoPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicoPersonalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
