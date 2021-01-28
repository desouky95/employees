import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { EmployeesService } from 'src/app/services/apis/employees/employees.service';

import { AllEmployeesComponent } from './all-employees.component';

describe('AllEmployeesComponent', () => {
  let component: AllEmployeesComponent;
  let fixture: ComponentFixture<AllEmployeesComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmployeesComponent ],
      imports : [HttpClientModule, RouterTestingModule, TranslateModule.forRoot()],
      providers : [EmployeesService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
