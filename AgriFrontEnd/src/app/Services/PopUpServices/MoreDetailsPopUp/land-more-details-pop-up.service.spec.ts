import { TestBed } from '@angular/core/testing';

import { LandMoreDetailsPopUpService } from './land-more-details-pop-up.service';

describe('LandMoreDetailsPopUpService', () => {
  let service: LandMoreDetailsPopUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandMoreDetailsPopUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
