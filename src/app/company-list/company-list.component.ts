import {Component, Injectable, OnInit} from '@angular/core';
import {Config} from "../company-item";
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
response:any;
  constructor(private  http:HttpClient) {
  }
  ngOnInit() {
    this.http.get<Config>('https://random-data-api.com/api/company/random_company?size=100')
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      });
  }
}






