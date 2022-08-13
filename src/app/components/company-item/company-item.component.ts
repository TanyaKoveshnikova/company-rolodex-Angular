import {Component, Input, OnInit, Output} from '@angular/core';
import {ICompanyItem} from "../../company-item.interface";

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss'],
})
export class CompanyItemComponent implements OnInit {
  @Input() companyItem!: ICompanyItem;

  constructor() {
  }

  ngOnInit(): void {
  }
}
