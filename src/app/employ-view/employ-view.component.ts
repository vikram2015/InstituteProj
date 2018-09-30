import { Component, OnInit } from '@angular/core';
import { EmployServiceService } from '../employ-service.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';

@Component({
  selector: 'app-employ-view',
  templateUrl: './employ-view.component.html',
  styleUrls: ['./employ-view.component.css']
})
export class EmployViewComponent implements OnInit {

  constructor(private _employService: EmployServiceService, private _router: Router) { }


  employDetails = {};

  goBack(){
    this._router.navigateByUrl('employRecord');
  }


  ngOnInit() {
    this.employDetails = this._employService.getFormData();
    console.log(this.employDetails);
  }

}
