import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Config} from "./company-item";



@Injectable({ providedIn: 'root' })
export class CompanyService implements OnInit{
  public company!: Config[];
  public companyItem!: Config | undefined;

  public companyType!: any;
  public companyIndustry!: any;
  private url:string = 'https://random-data-api.com/api/company/random_company?size=100'

  constructor(private http: HttpClient) { }


  public getCompanyItems():Observable<Array<Config>>{
    return this.http.get<Config[]>(this.url);
  }

  public getCompany(){
    this.getCompanyItems()
      .subscribe((response) => {
        this.company = response;
        console.log(this.company);
      });
  }

  ngOnInit() {
    this.getCompany();
  }
  public getCompanyType(){
    this.getUnicTypesCompany();
    return this.companyType;
  }

  public getCompanyIndustry(){
    this.getUnicIndustryCompany();
    return this.companyIndustry;
  }

  public getCompanyArr(){
    return this.company;
  }

  public serSelectedId(id: number):any{
    const item = this.company.find((item: Config) => item.id == id);
    this.companyItem = item;
    return this.companyItem;
  }

  public getUnicTypesCompany(){
    const company = this.company;
    let arrayTypes =[];
    for(let i of company){
      arrayTypes.push(i.type);
    }

    const uniqueSet = new Set(arrayTypes);
    this.companyType = [...uniqueSet];
  }

  public getUnicIndustryCompany(){
    const company = this.company;
    let arrayTypes =[];
    for(let i of company){
      arrayTypes.push(i.industry);
    }

    const uniqueSet = new Set(arrayTypes);
    this.companyIndustry = [...uniqueSet];
  }
}

