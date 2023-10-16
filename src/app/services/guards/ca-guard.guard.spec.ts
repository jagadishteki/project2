import { TestBed } from '@angular/core/testing';

import { CaGuardGuard } from './ca-guard.guard';

describe('CaGuardGuard', () => {
  let guard: CaGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CaGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
