import { Component } from '@angular/core';
import { HttpServiceService } from 'src/services/http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public httpService: HttpServiceService) {}
  title = 'attendence-manager';
  email:string ="";
  password:string = "";
  isEmployee:string = "e";


  validate() {
    console.log(this.email, this.password, this.isEmployee)
    if(this.isEmployee == "e") {
      this.httpService.validateEmployee(this.email, this.password);
    } else {
      this.httpService.validateUser(this.email, this.password);
    }
  }
}
