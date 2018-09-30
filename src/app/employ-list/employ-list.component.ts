import { Component, OnInit } from '@angular/core';
import { EmployServiceService } from '../employ-service.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';

@Component({
  selector: 'app-employ-list',
  templateUrl: './employ-list.component.html',
  styleUrls: ['./employ-list.component.css']
})
export class EmployListComponent implements OnInit {

  employList = [];

  constructor(private _employService: EmployServiceService, private _router: Router) { }

  addEmploy() {
    this._router.navigateByUrl('addEmploy');
  }

  updateEmploy(employ) {
    console.log(employ);
    this._employService.setFormData(employ);
    this._router.navigateByUrl('employUpdate');
  }

  deleteEmploy(i, employ) {

    var id = employ._id;

    this._employService.deleteEmploy(id).subscribe((data) => {
      console.log(data);
      if (data.success) {
        this.employList.splice(i, 1);
      }
    })
  }


  viewEmploy(employ) {
    console.log(employ);
    this._employService.setFormData(employ);
    this._router.navigateByUrl('employView');
  }



  ngOnInit() {
    this._employService.employList().subscribe((data) => {

      if (data && data.length > 0) {
        console.log('data in component')
        console.log(data)
        this.employList = data;
      }
    })
  }
}
