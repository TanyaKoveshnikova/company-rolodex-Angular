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
  id: number | undefined;
  companyItemEl: any;

  constructor(private activatedRoute: ActivatedRoute,
              private companyService:CompanyService){}

  ngOnInit(): void {
    let companyId = this.activatedRoute.snapshot.paramMap.get('id');
    // @ts-ignore
    this.companyService.getCompanyEl(+companyId)
      .subscribe((item: any) => {this.companyItemEl = item});
  }
}
