import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ApiService } from '../../api/api.service';

import { EmployeesService } from './employees.service';

describe('EmployeesService', () => {
  let service: EmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : [ApiService],
      imports : [HttpClientModule]
    });
    service = TestBed.inject(EmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
