import { TestBed } from '@angular/core/testing';

import { IntegracionContableService } from './integracion-contable.service';

describe('IntegracionContableService', () => {
  let service: IntegracionContableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntegracionContableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
