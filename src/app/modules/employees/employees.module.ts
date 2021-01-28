import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { AllEmployeesComponent } from './pages/all-employees/all-employees.component';
import { EmployeesService } from 'src/app/services/apis/employees/employees.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { EditEmployeeComponent } from './pages/edit-employee/edit-employee.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AllEmployeesComponent, EditEmployeeComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  providers : [EmployeesService]
})
export class EmployeesModule { }
