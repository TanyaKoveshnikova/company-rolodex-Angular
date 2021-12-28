import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';;
import {CompanyService} from "../company-service.service";
import {Config} from "../company-item";


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  company!: Config[];
  searchName = '';
  showTypeCompany =''
  companyType:any
  constructor(public companyService: CompanyService) {
  }

  ngOnInit() {
    this.getCompany();
    this.getCompanyType();
  }

  getCompany(){
    this.company = this.companyService.getCompanyArr();
  }

  getCompanyType (){
    this.companyType = this.companyService.getCompanyType();
  }

}






