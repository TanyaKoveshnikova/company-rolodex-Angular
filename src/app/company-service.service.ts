import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Config} from "./company-item";



@Injectable({ providedIn: 'root' })
export class CompanyService{
  public company!: Config[];
  // public companyDetails!: Config[];
  public companyItem!: Config;
  private url:string = 'https://random-data-api.com/api/company/random_company?size=100'

  constructor(private http: HttpClient) { }

  public getCompanyItems():Observable<Array<Config>>{
    return this.http.get<Config[]>(this.url);
  }

  getCompany(){
    this.getCompanyItems()
      .subscribe((response) => {
        this.company = response;
        // this.companyDetails = response;
        console.log(this.company);
      });
  }

  serSelectedId(id:any){
    console.log(id);
    const item = this.company.find((item: Config) => item.id == Number(id));
    if(item !== undefined) {
      this.companyItem = item;
    }
  }

  getCompanyArr(){
    this.getCompany();
    return this.company;
  }
}

