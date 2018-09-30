import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';



import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { CompanyRecordComponent } from './company-record/company-record.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';
import { AddEmployComponent } from './add-employ/add-employ.component';
import { EmployListComponent } from './employ-list/employ-list.component';
import { EmployUpdateComponent } from './employ-update/employ-update.component';
import { EmployViewComponent } from './employ-view/employ-view.component';
import { ViewCompanyComponent } from './view-company/view-company.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'companyRecord', component: CompanyRecordComponent },
  { path: 'companyUpdate', component: CompanyUpdateComponent },
  { path: 'companyView', component: ViewCompanyComponent },

  { path: 'employRecord', component: EmployListComponent },
  { path: 'employUpdate', component: EmployUpdateComponent },
  { path: 'addEmploy', component: AddEmployComponent },
  { path: 'employView', component: EmployViewComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})



export class AppRoutingModule { }
