import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeesService } from 'src/app/services/apis/employees/employees.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.scss'],
})
export class AllEmployeesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'age',
    'isactive',
    'phone',
    'gender',
    'actions',
  ];
  dataSource: MatTableDataSource<Employee>;
  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;
  constructor(private empService: EmployeesService, private router: Router) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    if (this.dataSource.data.length == 0) {
      this.empService.initService().then((_) => {
        this.getEmployees();
      });
    } else {
      this.getEmployees();
    }
  }

  getEmployees(): void {
    const emps = this.empService.getEmployees();
    this.dataSource = new MatTableDataSource(emps);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() :void {}

  // tslint:disable-next-line:typedef
  async deleteEmployee($data: Employee)  {
    this.empService.deleteEmployee($data.index);
    await this.getEmployees();
  }
  updateEmployee($data: Employee): void {
    this.router.navigate([`./edit/${$data.index}`]);
  }
}
