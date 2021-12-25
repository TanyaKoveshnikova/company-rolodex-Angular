import { Component, OnInit , Input} from '@angular/core';
import {Config} from "../company-item";


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {
  @Input() companyDetail!: Config;
  constructor() {
  }

  ngOnInit(): any {
  }
}

