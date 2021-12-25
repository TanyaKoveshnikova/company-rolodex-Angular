import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Subscription} from 'rxjs'
import { switchMap } from 'rxjs/operators';
import {CompanyListComponent} from "../company-list/company-list.component";
import {Config} from "../company-item";
import {CompanyService} from "../companyService";


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {
  id: any;
  companyItemEl: any;
  res: any;

  constructor(private activatedRoute: ActivatedRoute,
              private companyService:CompanyService){
    // @ts-ignore
    companyService.getCompanyItems()
      .subscribe((response: Config[] | undefined) => {
        this.res = response;
        console.log(this.res);
      });
  }

  ngOnInit(): void {
    let companyId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(typeof(Number(companyId)));
    this.companyItemEl = {
      id: Number(companyId)
    }
   for(let item = 0;item< this.res.length;item++){
     // @ts-ignore
     if(this.companyItemEl.id === this.res[item].id){
       this.companyItemEl= this.res[item];
     }
   }
    // @ts-ignore
    // @ts-ignore
    // this.companyService.getCompanyEl(Number(companyId))
    //   .subscribe((item:any) => this.companyItemEl = item);
  }
}
