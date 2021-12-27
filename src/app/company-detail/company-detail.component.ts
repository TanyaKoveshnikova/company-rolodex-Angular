import { Component, OnInit } from '@angular/core';
import {Config} from "../company-item";
import {CompanyService} from "../company-service.service";
import {ActivatedRoute} from "@angular/router";
import { switchMap} from "rxjs";



@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss'],
})
export class CompanyDetailComponent implements OnInit {
  company!: Config[];
  public id!: number;
  public companyItem!: Config;


  constructor(public companyService: CompanyService,
              private activateRoute: ActivatedRoute) {
    console.log('constructor:' + this.companyItem + ' ' + this.id)
  }


   ngOnInit(): any {
     this.activateRoute.paramMap.pipe(
       switchMap(params => params.getAll('id')))
       .subscribe(data=> this.id = +data);

     this.companyItem=this.companyService.serSelectedId(this.id);
     console.log('getElement:' + this.companyItem  + ' ' + this.id)

     console.log('ngOnInit:' + this.companyItem  + ' ' + this.id  + ' '+ this.companyService.company[2])
  }


  // getElement(){
  //   // this.id = this.activateRoute.snapshot.params['id'];
  //   this.companyItem=this.companyService.serSelectedId(this.id);
  //   console.log('getElement:' + this.companyItem )
  //   // this.companyItem = this.companyService.companyItem;
  // }
}

