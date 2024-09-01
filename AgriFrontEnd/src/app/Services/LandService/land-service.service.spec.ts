import { TestBed } from '@angular/core/testing';

import { LandServiceService } from './land-service.service';

describe('LandServiceService', () => {
  let service: LandServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
