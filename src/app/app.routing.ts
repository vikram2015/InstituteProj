import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';



import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { CompanyRecordComponent } from './company-record/company-record.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'companyRecord', component: CompanyRecordComponent },

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
