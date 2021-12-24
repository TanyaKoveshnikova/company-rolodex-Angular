import {Component, OnInit} from '@angular/core';;
import {CompanyService} from "../companyService";


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  response:any;

  constructor(public companyService: CompanyService) {
    companyService.getCompanyItems()
      .subscribe((response) => {
          this.response = response;
          console.log(this.response);
         });
  }
  ngOnInit() {
  }
}






