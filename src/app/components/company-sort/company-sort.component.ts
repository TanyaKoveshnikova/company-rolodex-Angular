import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ICompanyItem} from "../../company-item.interface";
import {CompanyService} from "../../services/company-service.service";

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['./company-sort.component.scss']
})
export class CompanySortComponent implements OnInit {
  @Output() onSortCompanyItems = new EventEmitter();

  public typeSort!: string | null;

  constructor(private _companyService: CompanyService) {
  }

  ngOnInit(): void {
  }

  public onNewSortTypeSelected() {
    const fullListCompanyItems = this.getCompanyItems();
    let sortCompanyItems: ICompanyItem[];

    if (this.typeSort === null) {
      sortCompanyItems = fullListCompanyItems;
    } else {
      const valueSort = this.typeSort.toString();
      sortCompanyItems = fullListCompanyItems.sort(function (a: any, b: any) {
        let nameA = a[valueSort].toLowerCase(), nameB = b[valueSort].toLowerCase()
        if (nameA < nameB)
          return -1
        if (nameA > nameB)
          return 1
        return 0
      })
    }

    this.onSortCompanyItems.emit(sortCompanyItems);
  }

  private getCompanyItems(): ICompanyItem[] {
    return this._companyService.company
  }
}
