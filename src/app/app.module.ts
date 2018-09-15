import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { CompanyServiceService } from './company-service.service';
import { CompanyRecordComponent } from './company-record/company-record.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    HomeComponent,
    CompanyRecordComponent,
    CompanyUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [CompanyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
