import { TestBed } from '@angular/core/testing';

import { ChildguardGuard } from './childguard.guard';

describe('ChildguardGuard', () => {
  let guard: ChildguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChildguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
