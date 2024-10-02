import { TestBed } from '@angular/core/testing';

import { ProductPopUPService } from './product-pop-up.service';

describe('ProductPopUPService', () => {
  let service: ProductPopUPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductPopUPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
