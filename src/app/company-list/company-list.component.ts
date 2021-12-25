import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';;
import {CompanyService} from "../companyService";
import {Config} from "../company-item";
import { Subject } from 'rxjs';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  @Input() company: Config[] | undefined;
  @Output() selected: EventEmitter<any> = new EventEmitter<any>();
  constructor(public companyService: CompanyService) {
  }

  ngOnInit() {
  // this.getCompany();
  }

  // getCompany(){
  // this.companyService.getCompanyItems()
  //   .subscribe((response) => {
  //     this.company = response;
  //     console.log(this.company);
  //   });
  // }

  sendCustomerId(id: any) {
    this.selected.emit(id);
  }
}






