import { Component, Input, OnInit } from '@angular/core';
import { Employee, EmployeesList, SortInfo } from '../models';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  @Input() employeesList: BehaviorSubject<Employee[]> = new BehaviorSubject<
    Employee[]
  >([]);

  sortedEmployeeList: Employee[] = [];
  sortedBy: SortInfo = {
    sortVal: 'department',
    sortDir: 'asc',
  };

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

  // this is a horrible hack
  sortEmployeeList(sortBy?: string): void {
    if (sortBy != null) {
      this.sortedBy.sortVal = sortBy;
    } else {
      this.sortedBy.sortVal = 'department';
    }
    this.toggleSortDir();
    this.sortedEmployeeList = _.orderBy(this.sortedEmployeeList, [
      this.sortedBy.sortVal,
      this.sortedBy.sortDir,
    ]);
  }

  toggleSortDir(): void {
    if (this.sortedBy.sortDir === 'asc') {
      this.sortedBy.sortDir = 'desc';
    } else if (this.sortedBy.sortDir === 'desc') {
      this.sortedBy.sortDir = 'asc';
    } else {
      console.error('some awful problem with sorting');
    }
  }

  ngOnInit(): void {
    console.log('EmployeeList init');
    this.employeesList.subscribe((data) => {
      this.sortedEmployeeList = this.employeesList.getValue();
      this.sortEmployeeList();
    });
  }
}
