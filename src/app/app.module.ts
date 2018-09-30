import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/**
 * Service File
 */
import { CompanyServiceService } from './company-service.service';
import { EmployServiceService } from './employ-service.service';

/**
 * Component File
 */
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
import { HomeServiceService } from './home-service.service';


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    HomeComponent,
    CompanyRecordComponent,
    CompanyUpdateComponent,
    AddEmployComponent,
    EmployListComponent,
    EmployUpdateComponent,
    EmployViewComponent,
    ViewCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [CompanyServiceService, EmployServiceService, HomeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
