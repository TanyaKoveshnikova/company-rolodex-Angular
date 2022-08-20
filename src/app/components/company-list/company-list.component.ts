import {Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, HostListener} from '@angular/core';

import {CompanyService} from "../../services/company-service.service";
import {ICompanyItem} from "../../company-item.interface";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {

  @ViewChild('itemsContainer', {read: ViewContainerRef})
  public container!: ViewContainerRef;

  @ViewChild('item', {read: TemplateRef})
  public template!: TemplateRef<any>;

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    if (this.isEnableAddElementsOnScroll) {
      let pos = window.scrollY + 10;
      let max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (pos >= max) {
        console.log('take me!!!')
        this.addNewElementInContainer(30, this._company)
      }
    }
  }

  public searchName = '';
  private _company!: ICompanyItem[];
  private isEnableAddElementsOnScroll: boolean = true;

  constructor(public companyService: CompanyService) {
  }

  ngOnInit() {
    this._company = this.companyService.company;
  }

  ngAfterViewInit() {
    this.addNewElementInContainer(50, this._company)
  }

  public onFilterCompanies(companies: ICompanyItem[]) {
    this.container.clear();

    if (companies.length === this._company.length) {
      this.addNewElementInContainer(50, this._company)
    } else {
      this.addNewElementInContainer(companies.length, companies)
    }
  }

  public checkAddMoreElementsOnScroll(isSortedOrFiltration: boolean) {
    this.isEnableAddElementsOnScroll = isSortedOrFiltration;
    console.log(isSortedOrFiltration)
  }

  private addNewElementInContainer(length: number, arrayCompanyItems: ICompanyItem[]) {
    const start = 0;
    const end = start + length - 1;

    for (let n = start; n <= end; n++) {
      this.container.createEmbeddedView(this.template, {
        item: arrayCompanyItems[n]
      });
    }
  }
}






