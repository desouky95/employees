import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmployeesComponent } from './pages/all-employees/all-employees.component';
import { EditEmployeeComponent } from './pages/edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path: '',
    component: AllEmployeesComponent,
  },
  {
    path: 'edit/:id',
    component: EditEmployeeComponent,
  },
  {
    path: 'create',
    component: EditEmployeeComponent,
    data: {
      create: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
