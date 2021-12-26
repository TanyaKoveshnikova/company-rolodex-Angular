import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';

import {CompanyService} from "./companyService";
import { CompanySortComponent } from './company-sort/company-sort.component';
import { SearchPipesName } from './search-pipes/search-pipes-name';
import { CompanyFilterComponent } from './company-filter/company-filter.component';
// import { InputLogicCompanyComponent } from './input-logic-company/input-logic-company.component';




@NgModule({
  declarations: [
    AppComponent,
    // InputLogicCompanyComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyYandexMapComponent,
    CompanySortComponent,
    SearchPipesName,
    CompanyFilterComponent,
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
export class AppModule {

}

