import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { LoginComponent } from './login/login.component';
import { AddEmployeeComponent } from './manager/add-employee/add-employee.component';
import { ViewAttendenceComponent } from './manager/view-attendence/view-attendence.component';
import { MarkAttendenceComponent } from './employee/mark-attendence/mark-attendence.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ManagerComponent,
    LoginComponent,
    AddEmployeeComponent,
    ViewAttendenceComponent,
    MarkAttendenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
