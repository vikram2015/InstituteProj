import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';



import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { CompanyRecordComponent } from './company-record/company-record.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'companyRecord', component: CompanyRecordComponent },
  { path: 'companyUpdate', component: CompanyUpdateComponent },
  { path: 'companyView', component: ViewCompanyComponent },
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
