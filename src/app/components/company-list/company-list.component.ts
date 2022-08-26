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
      const displaySize = document.documentElement.clientHeight;
      const posScrollOnTop = window.scrollY || document.documentElement.scrollTop;
      const maxAddElements = document.documentElement.scrollHeight - displaySize;
      if (posScrollOnTop + 10 >= maxAddElements) {
        this.addNewElementInContainer(30, this._company)
      }

      if (this._positionOnScrollForMouseDown < posScrollOnTop) {
        this.removeElementFromContainer();
      } else if (this._positionOnScroll > posScrollOnTop || displaySize >= posScrollOnTop) {
        this.addElementBeginningInContainer(posScrollOnTop);
      }
    }
  }

  public searchName = '';
  private _company!: ICompanyItem[];
  private _isEnableAddElementsOnScroll: boolean = true;
  private _counterRemoveCompanyItems: number = -1;
  private _positionOnScroll: number = 0;
  private _positionOnScrollForMouseDown: number = document.documentElement.clientHeight * 2;

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

  private removeElementFromContainer(): void {
    this.container.remove(0);
    this._counterRemoveCompanyItems += 1;
  }

  private addElementBeginningInContainer(posScrollOnTop: number): void {
    if (this._counterRemoveCompanyItems !== -1) {
      this.container.createEmbeddedView(this.template, {
        item: this._company[this._counterRemoveCompanyItems]
      }, 0);
      this._counterRemoveCompanyItems -= 1;
      this._positionOnScroll = posScrollOnTop
    }
  }
}

