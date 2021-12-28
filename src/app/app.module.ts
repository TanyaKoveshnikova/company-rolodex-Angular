import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';

import {CompanyService} from "./company-service.service";
import { CompanySortComponent } from './company-sort/company-sort.component';
import { SearchPipesName } from './search-pipes/search-pipes-name';
import { CompanyFilterComponent } from './company-filter/company-filter.component';
import {ShowPipesCompanyType} from "./search-pipes/show-pipes-company-type";




@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyYandexMapComponent,
    CompanySortComponent,
    SearchPipesName,
    CompanyFilterComponent,
    ShowPipesCompanyType
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

