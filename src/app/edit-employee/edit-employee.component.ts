import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee, EmployeeForm } from '../models';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  employee = new EmployeeForm();
  employeeFormGroup: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.employeeFormGroup = this.formBuilder.group({
      name: this.formBuilder.group({
        title: [this.employee.name.title],
        first: [this.employee.name.first, Validators.required],
        last: [this.employee.name.last, Validators.required],
      }),
      email: [this.employee.email, Validators.required],
      picture: this.formBuilder.group({
        large: [this.employee.picture?.large],
        medium: [this.employee.picture?.medium],
        thumbnail: [this.employee.picture?.thumbnail],
      }),
      department: [this.employee.department, Validators.required],
      phone: [this.employee.phone, Validators.required],
    });
  }

  ngOnInit(): void {
    let employee_id = this.activatedRoute.snapshot.paramMap.get('id');
    if (typeof employee_id === 'string') {
      this.getEmployee(employee_id).subscribe((data) => {
        this.employee = data as Employee;
        this.employeeFormGroup.patchValue(data);
      });
    }
  }

  onSubmit(): void {
    console.log(this.employeeFormGroup.value);
    if (this.employee && this.employee.id) {
      this.putEmployee(
        this.employee.id,
        this.employeeFormGroup.value
      ).subscribe(async (response) => {
        console.log('response:', response);
        await this.router.navigate(['/']);
      });
    }
  }

  putEmployee(employee_id: number, employee_form: EmployeeForm): Observable<Employee> {
    return this.httpClient
      .put<Employee>(
        `http://localhost:8080/api/employees/${employee_id}`,
        employee_form
      )
      .pipe(catchError(this.handleError));
  }

  getEmployee(employee_id: string): Observable<Employee> {
    return this.httpClient
      .get<Employee>(`http://localhost:8080/api/employees/${employee_id}`)
      .pipe(retry(3), catchError(this.handleError));
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
