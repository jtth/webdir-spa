import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Employee, EmployeesList } from '../models';
import { catchError, retry, Subject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  dtOptions: DataTables.Settings = {
    pagingType: 'full_numbers',
    pageLength: 20,
    lengthChange: false,
    columnDefs: [{ orderable: false, searchable: false, targets: 3 }], // disable the "edit" column
    language: {
      decimal: '',
      emptyTable: 'No employee data available in table',
      info: 'Showing _START_ to _END_ of _TOTAL_ employees',
      infoEmpty: 'Showing 0 to 0 of 0 employees',
      infoFiltered: '(filtered from _MAX_ total employees)',
      infoPostFix: '',
      thousands: ',',
      lengthMenu: 'Show _MENU_ entries',
      loadingRecords: 'Loading...',
      processing: 'Processing...',
      search: 'Search:',
      zeroRecords: 'No matching employees found',
      paginate: {
        first: 'First',
        last: 'Last',
        next: 'Next',
        previous: 'Previous',
      },
    },
  };
  dtTrigger: Subject<any> = new Subject<any>();
  employees: Employee[] = [];

  // make tailwind/postcss happy by being explicit so it can load the colors
  departmentColors: { [index: string]: string } = {
    hr: 'bg-red-100 text-red-800',
    engineering: 'bg-green-100 text-green-800',
    marketing: 'bg-cyan-100 text-cyan-800',
    legal: 'bg-yellow-100 text-yellow-800',
  };

  constructor(private httpClient: HttpClient) {}

  departmentClass(department: string | undefined): string {
    if (
      department &&
      Object.keys(this.departmentColors).includes(department.toLowerCase())
    ) {
      return this.departmentColors[`${department.toLowerCase()}`];
    } else {
      return 'bg-slate-100 text-slate-800';
    }
  }

  ngOnInit(): void {
    this.httpClient
      .get<EmployeesList[]>(`${environment.apiUrl}/employees/`)
      .pipe(retry(3), catchError(this.handleError))
      .subscribe((data) => {
        this.employees = (data as any).employees;
        // @ts-ignore
        this.dtTrigger.next();
      });
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => errorMessage);
  }
}
