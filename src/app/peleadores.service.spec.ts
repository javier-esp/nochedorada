import { TestBed } from '@angular/core/testing';

import { PeleadoresService } from './peleadores.service';

describe('PeleadoresService', () => {
  let service: PeleadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeleadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
