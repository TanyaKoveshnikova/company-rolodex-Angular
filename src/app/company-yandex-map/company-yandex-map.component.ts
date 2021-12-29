import { Component, OnInit } from '@angular/core';
import {YaConfig} from "angular8-yandex-maps";
import {Config} from "../company-item";
import {CompanyService} from "../company-service.service";
// @ts-ignore
import ymaps from 'ymaps';


@Component({
  selector: 'app-company-yandex-map',
  templateUrl: './company-yandex-map.component.html',
  styleUrls: ['./company-yandex-map.component.scss']
})
export class CompanyYandexMapComponent implements OnInit {
  map: any;

  company!: Config[];
  constructor(public companyService: CompanyService) {
    this.company = this.companyService.company;
  }


  ngOnInit() {
  }
}

