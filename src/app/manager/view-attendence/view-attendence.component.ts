import { Component } from '@angular/core';
import { HttpServiceService } from 'src/services/http-service.service';

@Component({
  selector: 'app-view-attendence',
  templateUrl: './view-attendence.component.html',
  styleUrls: ['./view-attendence.component.css']
})
export class ViewAttendenceComponent {

  constructor(public httpService:HttpServiceService) {}

  ngOnInit() {
    this.httpService.viewAttendence();
  }
}
