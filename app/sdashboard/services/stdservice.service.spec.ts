import { TestBed } from '@angular/core/testing';

import { StdserviceService } from './stdservice.service';

describe('StdserviceService', () => {
  let service: StdserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StdserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
