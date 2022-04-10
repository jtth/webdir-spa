import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { SafeStylePipe } from './safe-style.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    EditEmployeeComponent,
    SafeStylePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
