import { TestBed } from '@angular/core/testing';

import { MedicoPersonalService } from './medico-personal.service';

describe('MedicoPersonalService', () => {
  let service: MedicoPersonalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicoPersonalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
