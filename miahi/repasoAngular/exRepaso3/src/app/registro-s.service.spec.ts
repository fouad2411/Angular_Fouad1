import { TestBed } from '@angular/core/testing';

import { RegistroSService } from './registro-s.service';

describe('RegistroSService', () => {
  let service: RegistroSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
