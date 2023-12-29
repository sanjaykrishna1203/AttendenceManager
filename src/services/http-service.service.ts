import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private url = "http://localhost:3000";
  public userEmail = "";
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private cookieService: CookieService) { }


  attendenceData:any = [];
  dates:any = [];
  validateUser(email: string, password: string) {
    const params = {
      "email": email,
      "password": password
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(params);
    this.http.post(this.url + '/validateUser', params, { headers }).subscribe((response: any) => {
      console.log(response.data);
      if (response.data == true) {
        this.userEmail = email;
        this.cookieService.set("Email", email);
        this.cookieService.set("Role", "Manager");
        this.router.navigate(['/manager']);
      } else {
        alert("Enter Correct User name and password")
      }
    })
  }

  validateEmployee(email: string, password: string) {
    const params = {
      "email": email,
      "password": password
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(params);
    this.http.post(this.url + '/validateEmployee', params, { headers }).subscribe((response: any) => {
      console.log(response.data);
      if (response.data == true) {
        this.router.navigate(['/employee']);
        this.cookieService.set("Email", email);
        this.cookieService.set("Role", "Employee");
      } else {
        alert("Enter Correct User nameand password")
      }
    })
  }

  addEmployee(name: string, email: string, password: string, mgr:string) {
    const params = {
      "name": name,
      "email": email,
      "password": password,
      "manager": mgr
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post(this.url + '/addEmployee', params, { headers }).subscribe((response: any) => {
      console.log(response.data);
      if (response.data == true) {
        alert("Successfully Added");
      } else {
        alert("Error Cant add!")
      }
      this.router.navigate(['/manager']);
    })
  }

  markAttendence() {
    var date = new Date();
    var d = date.getDate().toString();
    var m = (date.getMonth() + 1).toString();
    var y = date.getFullYear().toString();

    const params = {
      "date": d+"-"+m+"-"+y,
      "email": this.cookieService.get("Email"),
      "time": date.getHours().toString() + ":" + date.getMinutes().toString() ,
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post(this.url + '/markAttendence', params, { headers }).subscribe((response: any) => {
      console.log(response.data);
      if (response.data == true) {
        alert("Successfully Marked Attendence");
      } else {
        alert("Error Cant Mark Attendence!")
      }
    })
  }

  viewAttendence() {
   console.log("Gete")
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.get(this.url + '/getAttendence', { headers }).subscribe((response: any) => {
      this.attendenceData = response.data;
      this.dates = Object.keys(this.attendenceData);
      console.log(response.data);
    })
  }
} 
