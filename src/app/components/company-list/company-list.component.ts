import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';;
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
  showTypeCompany ='';
  showIndustryCompany="";
  companyType:any;
  companyIndustry: any;


  constructor(public companyService: CompanyService) {
  }

  ngOnInit() {
    this.getCompany();
    this.getCompanyType();
    this.getCompanyIndustry();
  }

  getCompany(){
    this.company = this.companyService.company;
  }

  getCompanyType (){
    this.companyType = this.companyService.getCompanyType();
  }

  getCompanyIndustry (){
    this.companyIndustry = this.companyService.getCompanyIndustry();
  }

}






