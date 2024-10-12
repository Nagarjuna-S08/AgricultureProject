import { TestBed } from '@angular/core/testing';

import { RoleGaurdGuard } from './role-gaurd.guard';

describe('RoleGaurdGuard', () => {
  let guard: RoleGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
