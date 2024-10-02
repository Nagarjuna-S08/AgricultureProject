import { TestBed } from '@angular/core/testing';

import { LandPopUpService } from './land-pop-up.service';

describe('LandPopUpService', () => {
  let service: LandPopUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandPopUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
