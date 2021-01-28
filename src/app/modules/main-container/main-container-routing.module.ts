import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesModule } from '../employees/employees.module';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees' },
  {
    path: '',
    component: MainComponent,
    children: [{ path: 'employees', loadChildren: () => EmployeesModule }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainContainerRoutingModule {}
