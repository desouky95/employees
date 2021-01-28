import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { AuthService } from '../services/apis/auth/auth.service';

import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [RouterTestingModule],
      providers : [AuthService]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
