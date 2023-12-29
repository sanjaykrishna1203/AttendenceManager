import { Component } from '@angular/core';
import { HttpServiceService } from 'src/services/http-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public httpService: HttpServiceService) {}
  title = 'attendence-manager';
  email:string ="";
  password:string = "";
  isEmployee:string = "e";


  validate() {
    console.log(this.email, this.password, this.isEmployee)
    if(this.isEmployee == "e") {
      
    } else {
      this.httpService.validateUser(this.email, this.password);
    }
  }
}
