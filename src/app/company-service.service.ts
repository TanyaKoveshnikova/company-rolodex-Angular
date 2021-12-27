import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Config} from "./company-item";



@Injectable({ providedIn: 'root' })
export class CompanyService implements OnInit{
  public company!: Config[];
  public companyDetails!: Config[];
  public companyItem!: Config | undefined;
  public url:string = 'https://random-data-api.com/api/company/random_company?size=100'

  constructor(private http: HttpClient) { }


  public getCompanyItems():Observable<Array<Config>>{
    return this.http.get<Config[]>(this.url);
  }

  public getCompany(){
    this.getCompanyItems()
      .subscribe((response) => {
        this.company = response;
        this.companyDetails = response;
        console.log(this.company);
      });
  }

  ngOnInit() {
    this.getCompany();
  }

  public getCompanyArr(){
    return this.company;
  }

  public serSelectedId(id:any):any{
    console.log(id);
    for(let i of this.company){
      if(i.id === Number(id)){
        this.companyItem = i;
        return this.companyItem;
      }
      this.companyItem = this.company[0];
    }
    // const item = this.company.find((item: Config) => item.id == Number(id));
    // this.companyItem =Object.assign({}, item);
    return this.companyItem;
  }
}

