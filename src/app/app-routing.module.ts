import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: EmployeesListComponent, data: { animation: 0 } },
  {
    path: 'edit/:id',
    component: EditEmployeeComponent,
    data: { animation: 1 },
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { animation: 2 },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
