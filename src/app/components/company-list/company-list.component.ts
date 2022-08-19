import {Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, HostListener} from '@angular/core';

import {CompanyService} from "../../services/company-service.service";
import {ICompanyItem} from "../../company-item.interface";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  company!: ICompanyItem[];
  searchName = '';
  showTypeCompany = '';
  showIndustryCompany = "";
  unicCompanyType: any;
  unicCompanyIndustry: any;

  @ViewChild('itemsContainer', {read: ViewContainerRef})
  public container!: ViewContainerRef;

  @ViewChild('item', {read: TemplateRef})
  public template!: TemplateRef<any>;

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    //In chrome and some browser scroll is given to body tag
    let pos = window.scrollY + 10;
    let max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if (pos >= max) {
      console.log('take me!!!')
      this.addNewElementInContainer(30)
      //Do your action here
    }
  }

  constructor(public companyService: CompanyService) {
    this.getCompany();
  }

  ngOnInit() {
    this.getCompanyType();
    this.getCompanyIndustry();
  }

  ngAfterViewInit() {
    this.addNewElementInContainer(50)

  }

  public getCompany() {
    this.company = this.companyService.company;
  }

  public getCompanyType() {
    this.unicCompanyType = this.companyService.getCompanyType();
  }

  public getCompanyIndustry() {
    this.unicCompanyIndustry = this.companyService.getCompanyIndustry();
  }

  public updateListIndustry(type: string) {
    this.companyService.selectedTypeFilter = type
    // this.companyIndustry$.pipe(
    //   filter((company: any) => {
    //     if (company.type === type) {
    //       return company;
    //     }
    //   })
    //)
  }

  public updateCompanyListOnType() {
    this.updateCompanyListFilter('type', this.showTypeCompany)
  }

  public updateCompanyListOnIndustry() {
    this.updateCompanyListFilter('industry', this.showIndustryCompany)
  }

  private updateCompanyListFilter(typeUpdate: string, savedValue: string) {
    if (this.company.length !== 0 || (savedValue) !== '') {
      this.container.clear();
      this.company = this.companyService.company.filter((x: any) => {
        if ((savedValue) === x[(typeUpdate)]) {
          this.container.createEmbeddedView(this.template, {
            item: x
          });
        }
      })
    } else {
      this.addNewElementInContainer(50 - this.container.length)
    }
  }

  private addNewElementInContainer(length: number) {
    const start = 0;
    const end = start + length - 1;

    for (let n = start; n <= end; n++) {
      this.container.createEmbeddedView(this.template, {
        item: this.company[n]
      });
    }
  }
}






