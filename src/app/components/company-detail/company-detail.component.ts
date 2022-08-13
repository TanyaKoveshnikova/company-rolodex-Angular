import { Component, OnInit } from '@angular/core';
import {ICompanyItem} from "../../company-item.interface";
import {CompanyService} from "../../services/company-service.service";
import {ActivatedRoute} from "@angular/router";
import { switchMap} from "rxjs";



@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss'],
})
export class CompanyDetailComponent implements OnInit {
  company!: ICompanyItem[];
  public id!: number;
  public companyItem!: ICompanyItem;


  constructor(public companyService: CompanyService,
              private activateRoute: ActivatedRoute) {
  }


   ngOnInit(): any {
     this.activateRoute.paramMap.pipe(
       switchMap(params => params.getAll('id')))
       .subscribe(data=> this.id = +data);

     this.getElement();
  }


  getElement(){
    this.companyItem=this.companyService.serSelectedId(this.id);
  }
}

