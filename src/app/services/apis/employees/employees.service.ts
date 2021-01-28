import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/interfaces/Employee';
import { ApiService } from '../../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  employees: Employee[] = [];
  constructor(private api: ApiService) {}

  initService() {
    return this.api
      .getAsync('./assets/data/employees.json')
      .then((emps) => (this.employees = emps));
  }
  getEmployees() {
    if (this.employees.length === 0) {
      this.initService();
    }
    return this.employees;
  }

  async getEmployee(id: number): Promise<Employee | undefined> {
    let emps: Employee[] = [];
    emps = await this.getEmployees();
    return emps.find((_) => _.index == id);
  }

  updateEmployee(emp: Employee): boolean {
    const existEmp = this.employees.find((_) => _.index == emp.index);
    const index = this.employees.findIndex((_) => _.index == emp.index);
    if (existEmp) {
      this.employees[index] = emp;
      return true;
    }
    return false;
  }

  createEmployee(emp: Employee): boolean {
    emp.index = this.employees.length;
    this.employees.push(emp);
    console.log(this.employees);
    if (this.employees[this.employees.length - 1] == emp) {
      return true;
    }
    return false;
  }

  deleteEmployee(id: number): boolean {
    const index = this.employees.findIndex((_) => _.index == id);
    if (index != null) {
      this.employees.splice(index, 1);
      return true;
    }
    return false;
  }
}
