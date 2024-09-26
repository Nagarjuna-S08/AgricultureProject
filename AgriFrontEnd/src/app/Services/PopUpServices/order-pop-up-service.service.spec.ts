import { TestBed } from '@angular/core/testing';

import { OrderPopUpServiceService } from './order-pop-up-service.service';

describe('OrderPopUpServiceService', () => {
  let service: OrderPopUpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderPopUpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
