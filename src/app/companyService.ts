import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Config} from "./company-item";



@Injectable()
export class CompanyService {
  private url:string = 'https://random-data-api.com/api/company/random_company?size=100'
  constructor(private http: HttpClient) { }

  public getCompanyItems():Observable<Array<Config>>{
    return this.http.get<Config[]>(this.url);
  }
}

