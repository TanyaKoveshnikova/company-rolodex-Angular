import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyListComponent} from "./components/company-list/company-list.component";
import {CompanyYandexMapComponent} from "./components/company-yandex-map/company-yandex-map.component";
import { CompanyDetailComponent} from "./components/company-detail/company-detail.component";



const routes: Routes = [
  {path: 'detail/:id', component: CompanyDetailComponent},
  {path: 'list', component: CompanyListComponent},
  {path: 'map', component: CompanyYandexMapComponent},
  {path: '',   redirectTo: '', pathMatch: 'full' },
  {path: '**', component: CompanyListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
