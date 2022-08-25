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
    if (this._isEnableAddElementsOnScroll) {
      const pos = window.scrollY + 10;
      const maxAddElements = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (pos >= maxAddElements) {
        console.log('take me!!!')
        this.addNewElementInContainer(30, this._company)
      }

      const posNowPixel = window.scrollY || document.documentElement.scrollTop;

      if (this._positionOnScrollForMousDown <= posNowPixel ) {
        this.container.remove(0);
        this._counterRemoveCompanyItems += 1;
        console.log('remove')

        this._positionOnScroll = posNowPixel - 262
      } else  if (this._positionOnScroll  > posNowPixel || document.documentElement.clientHeight + 262 >= posNowPixel) {
        if (this._counterRemoveCompanyItems !== -1) {
          this.container.createEmbeddedView(this.template, {
            item: this._company[this._counterRemoveCompanyItems]
          }, 0);
          this._counterRemoveCompanyItems -= 1;
          console.log('add')

          this._positionOnScroll = posNowPixel
        }
      }
    }
    console.log(this.container.length, ' container length')

  }

  public searchName = '';
  private _company!: ICompanyItem[];
  private _isEnableAddElementsOnScroll: boolean = true;
  private _counterRemoveCompanyItems: number = -1;
  private _positionOnScroll: number = 0;
  private _positionOnScrollForMousDown: number = document.documentElement.clientHeight * 2;

  constructor(public companyService: CompanyService) {
  }

  ngOnInit() {
    this._company = this.companyService.company;
  }

  ngAfterViewInit() {
    this.addNewElementInContainer(50, this._company)
  }

  public onSortCompanyItems(companies: ICompanyItem[]) {
    this.container.clear();
    this.addNewElementInContainer(50, companies);
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
    this._isEnableAddElementsOnScroll = isSortedOrFiltration;
  }

  private addNewElementInContainer(length: number, arrayCompanyItems: ICompanyItem[]) {
    const start = this.container.length;
    const end = start + length - 1;
    if (start + end > arrayCompanyItems.length) {
      arrayCompanyItems.push(...arrayCompanyItems);
    }

    for (let n = start; n <= end; n++) {
      this.container.createEmbeddedView(this.template, {
        item: arrayCompanyItems[n]
      });
    }
  }
}





//TODO: ' ДОДЕЛАТЬ СКРОЛЛ '
