import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CompanyListComponent} from './components/company-list/company-list.component';
import {CompanyDetailComponent} from './components/company-detail/company-detail.component';
import {CompanyYandexMapComponent} from './components/company-yandex-map/company-yandex-map.component';

import {CompanyService} from "./services/company-service.service";
import {AngularYandexMapsModule} from "angular8-yandex-maps";
import {CompanyItemComponent} from './components/company-item/company-item.component';
import {CompanyFilterComponent} from "./components/company-filter/company-filter.component";
import {CompanySortComponent} from "./components/company-sort/company-sort.component";


@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyYandexMapComponent,
    CompanyItemComponent,
    CompanyFilterComponent,
    CompanySortComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularYandexMapsModule,

  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

