import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';


@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {

  companyDetails = {};

  constructor(private _serviceFile:CompanyServiceService, private _router: Router) { }

  goBack(){
    this._router.navigateByUrl('companyRecord');
  }


  ngOnInit() {
   this.companyDetails =  this._serviceFile.getFormData()
  }

}
