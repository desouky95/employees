import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeesService } from 'src/app/services/apis/employees/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
  employee: Employee | undefined;
  editForm: FormGroup;
  createHandler: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeesService
  ) {
    this.editForm = new FormGroup({
      age: new FormControl('', [Validators.required]),
      gender: new FormControl(''),
      isActive: new FormControl(''),
      name: new FormControl('', Validators.required),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
      ]),
    });
    this.activatedRoute.data.subscribe((e) => {
      this.createHandler = e?.create;
    });
    this.activatedRoute.params.subscribe((e) => {
      if (!this.createHandler) {
        this.getEmployee(e.id);
      }
    });
  }

  ngOnInit(): void {}

  async getEmployee(id: number) {
    this.employee = await this.employeeService.getEmployee(id);
    this.editForm = new FormGroup({
      age: new FormControl(this.employee?.age, [Validators.required]),
      gender: new FormControl(this.employee?.gender),
      isActive: new FormControl(this.employee?.isActive, [Validators.required]),
      name: new FormControl(this.employee?.name, Validators.required),
      phone: new FormControl(this.employee?.phone, [
        Validators.required,
        Validators.minLength(11),
      ]),
    });
  }

  updateEmployee(): void {
    console.log(this.editForm.value);
    const updated = this.employeeService.updateEmployee(
      Object.assign({}, this.employee, this.editForm.value)
    );
    if (updated) {
      this.router.navigate(['/employees']);
    }
  }

  createEmployee(): void {
    const created = this.employeeService.createEmployee(this.editForm.value);
    if (created) {
      this.router.navigate(['/employees']);
    }
  }
}
