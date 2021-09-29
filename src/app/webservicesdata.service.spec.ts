import { TestBed } from '@angular/core/testing';

import { WebservicesdataService } from './webservicesdata.service';

describe('WebservicesdataService', () => {
  let service: WebservicesdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebservicesdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
