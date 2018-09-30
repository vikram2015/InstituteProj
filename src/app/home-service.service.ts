import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeServiceService {

  constructor(private _http: Http) { }

  fetchTheRecord(){
    return this._http.get('/home/fetchCompanyAndEmployList').map(function (data) {
      console.log(data);
      if (data) {
        let newData = data.json();
        if (newData.success) {
          return newData.employData;
        }
      }
    });
  }

}
