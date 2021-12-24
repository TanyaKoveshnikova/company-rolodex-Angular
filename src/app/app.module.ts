import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {CompanyService} from "./companyService";




@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyYandexMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

