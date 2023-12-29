import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { AddEmployeeComponent } from './manager/add-employee/add-employee.component';
import { ViewAttendenceComponent } from './manager/view-attendence/view-attendence.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'addEmployee', component: AddEmployeeComponent },
  { path: 'viewAttendance', component: ViewAttendenceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
