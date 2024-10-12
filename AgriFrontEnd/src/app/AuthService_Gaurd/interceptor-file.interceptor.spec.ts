import { TestBed } from '@angular/core/testing';

import { InterceptorFileInterceptor } from './interceptor-file.interceptor';

describe('InterceptorFileInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorFileInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptorFileInterceptor = TestBed.inject(InterceptorFileInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
