import { TestBed } from '@angular/core/testing';

import { PrescripcionOrdenMedicaService } from './prescripcion-orden-medica.service';

describe('PrescripcionOrdenMedicaService', () => {
  let service: PrescripcionOrdenMedicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescripcionOrdenMedicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
