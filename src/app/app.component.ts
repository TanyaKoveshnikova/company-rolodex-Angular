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

  company: Config[] | undefined;
  companyDetails: Config[] | undefined ;
  selectedCompany: Config | undefined;


  constructor(public companyService: CompanyService) {
  }

  ngOnInit() {
    this.getCompany();
  }

  getCompany(){
    this.companyService.getCompanyItems()
      .subscribe((response) => {
        this.company = response;
        console.log(this.company);
      });
  }


  serSelectedId(id:any){
    console.log(id);
    // @ts-ignore
    this.selectedCompany = this.companyDetails.find((item: Config) => item.id == Number(id));
  }
}

