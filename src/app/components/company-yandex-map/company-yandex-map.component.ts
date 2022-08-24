import {Component, OnInit} from '@angular/core';

import {ICompanyItem} from "../../company-item.interface";
import {CompanyService} from "../../services/company-service.service";

@Component({
  selector: 'app-company-yandex-map',
  templateUrl: './company-yandex-map.component.html',
  styleUrls: ['./company-yandex-map.component.scss']
})
export class CompanyYandexMapComponent implements OnInit {
  public map: any;
  public company!: ICompanyItem[];

  constructor(public companyService: CompanyService) {
    this.company = this.companyService.company;
  }

  ngOnInit() {
    this.createMap();
  }


  public onOpenBalloonCompany(company: ICompanyItem) {
    this.map.setCenter([company.latitude, company.longitude], 12);
  }


  private createMap() {
    ymaps.ready().then(() => {
      this.map = new ymaps.Map('map', {
        center: [this.company[0].latitude, this.company[0].longitude],
        zoom: 12
      });

      this.createPointOnMap();
    });
  }

  private createPointOnMap() {
    for (let i = 0; i < this.company.length; i += 1) {
      this.map.geoObjects
        .add(new ymaps.Placemark([this.company[i].latitude, this.company[i].longitude],
          {
            balloonContentHeader: `<div style="height: auto">
                                        <div>
                                            ${this.company[i].suffix} "${this.company[i].business_name}"
                                        </div>
                                   </div>`,
            balloonContentBody:
              `<div>${this.company[i].phone_number}</div><br/>` +
              `<div>address: ${this.company[i].full_address}</div>`,
            iconCaption: `${this.company[i].business_name}`
          }))
    }
  }
}

