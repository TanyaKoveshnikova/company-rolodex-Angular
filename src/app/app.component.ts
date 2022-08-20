import {Component, Input, OnInit} from '@angular/core';
import {CompanyService} from "./services/company-service.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-front';

  constructor(private _companyService: CompanyService, private _route: ActivatedRoute, private _router: Router) {
    this._companyService.getCompany();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}

