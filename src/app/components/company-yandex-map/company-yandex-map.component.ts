import {Component, OnInit} from '@angular/core';

import {ICompanyItem} from "../../company-item.interface";
import {CompanyService} from "../../services/company-service.service";


@Component({
  selector: 'app-company-yandex-map',
  templateUrl: './company-yandex-map.component.html',
  styleUrls: ['./company-yandex-map.component.scss']
})
export class CompanyYandexMapComponent implements OnInit {
  map: any;
  company!: ICompanyItem[];

  constructor(public companyService: CompanyService) {
    this.company = this.companyService.company;
  }

  ngOnInit() {
  }


}

