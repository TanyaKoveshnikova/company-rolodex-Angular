import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';;
import {CompanyService} from "../companyService";
import {Config} from "../company-item";


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  company!: Config[];
  companyDetails!: Config[];
  searchName = '';
  selectedCompany!: Config;
  constructor(public companyService: CompanyService) {
  }

  ngOnInit() {
    this.getCompany();
  }

  getCompany(){
    this.companyService.getCompanyItems()
      .subscribe((response) => {
        this.company = response;
        this.companyDetails = response;
        console.log(this.company);
      });
  }
}






