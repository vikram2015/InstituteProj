import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';


@Component({
  selector: 'app-company-record',
  templateUrl: './company-record.component.html',
  styleUrls: ['./company-record.component.css']
})
export class CompanyRecordComponent implements OnInit {

  companyList  = [];

  constructor(private _serviceFile:CompanyServiceService, private _router: Router) { }


  addCompany(){
    this._router.navigateByUrl('company');
  }




  ngOnInit() {
    this._serviceFile.companyDetails().subscribe((data)=>{
      
      if(data && data.length > 0){
        console.log('data in component')
        console.log(data)
        this.companyList = data;
      }
      
    })
  }

}
