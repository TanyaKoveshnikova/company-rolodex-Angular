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
  points = ['Москва, метро Смоленская', 'Москва, метро Арбатская', [55.734876, 37.59308]];
  multiRoute: any;

  company!: Config[];
  constructor(public companyService: CompanyService) {
    this.company = this.companyService.company;
  }


  ngOnInit() {
    ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then((maps: { Map: new (arg0: string, arg1: { center: number[]; zoom: number; controls: string[]; }) => any; multiRouter: { MultiRoute: new (arg0: { referencePoints: (string | number[])[]; }, arg1: { boundsAutoApply: boolean; reverseGeocoding: boolean; viaPointDraggable: boolean; }) => any; }; geocode: new (arg0: string, arg1: { result: number; }) => Promise<any>; }) => {
      this.map = new maps.Map('map', {
        center: [55.75, 37.6],
        zoom: 8,
        controls: ['geolocationControl', 'zoomControl']
      });
      this.multiRoute = new maps.multiRouter.MultiRoute({
        referencePoints: this.points
      }, {
        boundsAutoApply: true,
        reverseGeocoding: true,
        viaPointDraggable: true
      });
      new maps.geocode('Москва', {result: 1}).then(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
      this.renderRoute();
    })
      .catch((error: any) => console.log('Failed to load Yandex Maps', error));
  }

  addPoint(point: string) {
    if (point === '') {
      return;
    }
    this.points.push(point);
    this.updateRoute();
    this.geoCoder(point);
    // this.map.setCenter([55.818, 37.513]);
  }

  dellPoint(i: number) {
    this.points.splice(i, 1);
    this.updateRoute();
  }

  renderRoute() {
    this.map.geoObjects.add(this.multiRoute);
    this.multiRoute.editor.start();
  }

  updateRoute() {
    this.multiRoute.model.setReferencePoints(this.points);
    this.map.options.set('mapStateAutoApply', true);
  }

  geoCoder(point: any) {
    new ymaps.geocode('Москва', {result: 1}).then((res: any) => {
      console.log(res);
    }, (err: any) => {
      console.log(err);
    });
  }
}

