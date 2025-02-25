import { TestBed } from '@angular/core/testing';

import { ServEmpleadoService } from './serv-empleado.service';

describe('ServEmpleadoService', () => {
  let service: ServEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
