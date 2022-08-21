import {Component,  OnInit} from '@angular/core';
import {CompanyService} from "./services/company-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-front';

  constructor(private _companyService: CompanyService) {
    this._companyService.getCompany();
  }

  ngOnInit() {
  }
}

