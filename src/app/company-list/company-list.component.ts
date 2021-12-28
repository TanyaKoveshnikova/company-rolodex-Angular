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
  g:any
  constructor(public companyService: CompanyService) {
    this.g = this.companyService.registrationFormType;
  }

  ngOnInit() {
    this.getCompany();
  }

  getCompany(){
    this.company = this.companyService.getCompanyArr();
  }
}






