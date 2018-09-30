import { Component, OnInit } from '@angular/core';
import { EmployServiceService } from '../employ-service.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';

@Component({
  selector: 'app-add-employ',
  templateUrl: './add-employ.component.html',
  styleUrls: ['./add-employ.component.css']
})
export class AddEmployComponent implements OnInit {

  formData={};

  constructor(private _employService:EmployServiceService, private _router: Router) { }


  saveEmploy(){
    console.log("this.formData in add component");
    console.log(this.formData);
    this._employService.saveNewEmploy(this.formData).subscribe((data)=>{

      console.log(data);

      if(data.success){
        console.log('data on success true component');
        console.log(data);
        this._router.navigateByUrl('employRecord');
      }else{
        console.log('data on success false component');
        console.log(data);
        alert(data.MSG);
      }
    })
  }



  ngOnInit() {
  }

}
