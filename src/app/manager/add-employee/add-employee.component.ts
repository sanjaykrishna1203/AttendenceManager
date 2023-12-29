import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from 'src/services/http-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  eName:string = "";
  eEmail:string = "";
  ePassword:string = "";
  mgrEmail:string = "";
  constructor(public httpService: HttpServiceService, private cookieService: CookieService) {}

  ngOnInit() {
    this.mgrEmail = this.cookieService.get("Email");
  }

  addEmployee() {
    this.httpService.addEmployee(this.eName, this.eEmail, this.ePassword, this.mgrEmail);
  }

}
