import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyListComponent} from "./company-list/company-list.component";
import {CompanyYandexMapComponent} from "./company-yandex-map/company-yandex-map.component";
import { CompanyDetailComponent} from "./company-detail/company-detail.component";


const routes: Routes = [
  {path: 'list', component: CompanyListComponent},
  {path: 'detail/:id', component: CompanyDetailComponent},
  {path: 'map', component: CompanyYandexMapComponent},
  {path: '',   redirectTo: '/list', pathMatch: 'full' },
  {path: '**', component: CompanyListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
