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
  constructor(public companyService: CompanyService) {
  }

  ngOnInit() {
    this.getCompany();
  }

  getCompany(){
    this.company = this.companyService.getCompanyArr();
  }
}






