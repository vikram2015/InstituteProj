import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployServiceService {

  formData = {};

  constructor(private _http: Http) { }


  saveNewEmploy(parameter) {
    console.log('parameter in service');
    console.log(parameter);
    return this._http.post('/employ/saveEmploy', parameter).map(function (data) {
      console.log(data);
      let newData = data.json();
      if (newData) {
        return newData;
      }
    });
  };


  employList() {
    return this._http.get('/employ/employList').map(function (data) {
      console.log(data);
      if (data) {
        let newData = data.json();
        if (newData.success) {
          return newData.employData;
        }
      }
    });
  };

  deleteEmploy(id) {
    console.log("id")
    console.log(id)
    return this._http.post('/employ/deleteEmploy', { params: id }).map(function (data) {
      console.log('data is deleted');
      console.log(data);
      let newData = data.json();
      if (newData.success) {
        return newData;
      }
    });
  };

  updateEmploy(id) {
    return this._http.post('/employ/updateEmploy', id).map(function (data) {
      console.log(data);
      let newData = data.json();
      if (newData.success) {
        return newData;
      }
    });
  };


  setFormData(parameter) {
    console.log(parameter);
    this.formData = parameter;
  }

  getFormData() {
    return this.formData;
  }


}
