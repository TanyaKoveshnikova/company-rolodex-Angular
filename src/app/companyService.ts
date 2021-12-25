import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Config} from "./company-item";


@Injectable()
export class CompanyService {
  private url:string = 'https://random-data-api.com/api/company/random_company?size=100'
  public resp: Config[] | undefined;
  constructor(private http: HttpClient) { }

  public getCompanyItems():Observable<Array<Config>>{
    return this.http.get<Config[]>(this.url);
  }

   // public getCompanyEl(id: number):Observable<Config>{
   // let i = this.getCompanyItems();
   // return
   // }
}

