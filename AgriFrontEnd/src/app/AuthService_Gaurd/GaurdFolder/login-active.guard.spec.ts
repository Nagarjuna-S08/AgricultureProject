import { TestBed } from '@angular/core/testing';

import { LoginActiveGuard } from './login-active.guard';

describe('LoginActiveGuard', () => {
  let guard: LoginActiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginActiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
