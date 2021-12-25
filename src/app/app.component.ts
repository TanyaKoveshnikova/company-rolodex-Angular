import {Component, OnInit} from '@angular/core';
import {Config} from "./company-item";
import {CompanyService} from "./companyService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test-front';

  company!: Config[];
  companyDetails!: Config[];
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


  serSelectedId(id:any){
    console.log(id);
    const item = this.companyDetails.find((item: Config) => item.id == Number(id));
    if(item !== undefined) {
      this.selectedCompany = item;
    }
  }
}

