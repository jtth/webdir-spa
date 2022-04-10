import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  @Input() employeesList: Employee[] | undefined;

  departmentColors: { [index: string]: string } = {
    HR: 'red',
    Engineering: 'green',
    Marketing: 'cyan',
    Legal: 'yellow',
  };
  constructor() {}

  departmentClass(department: string | undefined): string {
    let color: string;
    if (department && Object.keys(this.departmentColors).includes(department)) {
      color = this.departmentColors[`${department}`];
    } else {
      color = 'slate';
    }
    return `bg-${color}-100 text-${color}-800`;
  }

  ngOnInit(): void {
    console.log('EmployeeList init');
  }
}
