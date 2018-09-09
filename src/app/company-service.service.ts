import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class CompanyServiceService {

  constructor(private _http:Http) { }

  /**
   * 
   * This function is for saving the new company
   */
  saveCompanyInService(formData){
     return this._http.post('/company/saveCompany', formData).map(function (data) {
       console.log(data);
       let newData = data.json();
       if(newData.success){

        return newData.clientViewData;
       }
    });
  }

  /**
   * This is the function for fetching all the company records
   */
  companyDetails(){
    return this._http.get('/company/companyDetails').map(function (data) {
       console.log(data);
       let newData = data.json();
       console.log("this is service file ")
       console.log(newData)
       if(newData.success){

        return newData.companyData;
       }
    });
  }

}
