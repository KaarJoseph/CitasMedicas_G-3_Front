import { TestBed } from '@angular/core/testing';

import { PerfilAccesoService } from './perfil-acceso.service';

describe('PerfilAccesoService', () => {
  let service: PerfilAccesoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilAccesoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
