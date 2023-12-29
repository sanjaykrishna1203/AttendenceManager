import { Component } from '@angular/core';
import { HttpServiceService } from 'src/services/http-service.service';

@Component({
  selector: 'app-mark-attendence',
  templateUrl: './mark-attendence.component.html',
  styleUrls: ['./mark-attendence.component.css']
})
export class MarkAttendenceComponent {
  time:string = "";
  date:Date | undefined;
  constructor(private httpService: HttpServiceService) { setInterval(() => {
    this.date = new Date()
  }, 1000)}

  ngOnInit() {
  }

  markAttendence() {
    this.httpService.markAttendence();
  }


}
