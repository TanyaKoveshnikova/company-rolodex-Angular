import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CompanyService} from "../../services/company-service.service";
import {ICompanyItem} from "../../company-item.interface";

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['./company-filter.component.scss']
})
export class CompanyFilterComponent implements OnInit {
  @Output() onChange = new EventEmitter()
  @Output() isSortedOrFiltration = new EventEmitter()

  public unicCompanyType: any;
  public unicCompanyIndustry: any;
  public controlsForm: FormGroup = new FormGroup({
    typeCompany: new FormControl(null),
    industryCompany: new FormControl(null),
    nameCompany: new FormControl('')
  });

  private _filteredCompaniesByName: ICompanyItem[] = [];

  constructor(private _companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.getCompanyType();
    this.getCompanyIndustry();
  }

  public onSearchByName() {
    this._filteredCompaniesByName = this.filterByName(this.controlsForm.controls["nameCompany"].value.toString())
    this.onChange.emit(this._filteredCompaniesByName);
    this.checkProcessFiltrationOrSorted();
  }

  public updateCompanyListFilter() {
    this.checkProcessFiltrationOrSorted();
    let fullListCompanyItems = this.getCompanyItems();
    const inputName = this.controlsForm.controls["nameCompany"].value;
    const selectedIndustry = this.controlsForm.controls["industryCompany"].value;
    const selectedType = this.controlsForm.controls["typeCompany"].value;

    let filteredCompanies: ICompanyItem[] = [];

    if (inputName.length !== 0) {
      fullListCompanyItems = this._filteredCompaniesByName;
    }
    if (selectedIndustry === null && selectedType === null) {
      filteredCompanies = fullListCompanyItems;
    } else if (selectedIndustry !== null && selectedType === null) {
      filteredCompanies = this.filterCompanyIndustryAndType('industry', selectedIndustry, fullListCompanyItems);
    } else if (selectedIndustry === null && selectedType !== null) {
      filteredCompanies = this.filterCompanyIndustryAndType('type', selectedType, fullListCompanyItems);
    } else if (selectedIndustry !== null && selectedType !== null) {
      let firstFilteredCompanyItem = this.filterCompanyIndustryAndType('type', selectedType, fullListCompanyItems);
      filteredCompanies = this.filterCompanyIndustryAndType('industry', selectedIndustry, firstFilteredCompanyItem);
    }

    this.onChange.emit(filteredCompanies);
  }

  private getCompanyItems(): ICompanyItem[] {
    return this._companyService.company
  }

  private getCompanyType() {
    this.unicCompanyType = this._companyService.getCompanyType();
  }

  private getCompanyIndustry() {
    this.unicCompanyIndustry = this._companyService.getCompanyIndustry();
  }

  private filterByName(searchLine: string): ICompanyItem[] {
    const fullListCompanyItems = this.getCompanyItems();

    return fullListCompanyItems.filter((company: any) => {
      const matchLine = company.business_name?.toLowerCase().startsWith(searchLine.toLowerCase());
      if (matchLine) {
        return company
      }
    })
  }

  private filterCompanyIndustryAndType(typeUpdate: string, savedValue: string, arrayFiltered: ICompanyItem[]): ICompanyItem[] {
    return arrayFiltered.filter((x: any) => {
      if ((savedValue) === x[(typeUpdate)]) {
        return x;
      }
    })
  }

  private checkProcessFiltrationOrSorted() {
    const inputName = this.controlsForm.controls["nameCompany"].value;
    const selectedIndustry = this.controlsForm.controls["industryCompany"].value;
    const selectedType = this.controlsForm.controls["typeCompany"].value;

    if (inputName.length !== 0 || selectedType !== null || selectedIndustry !== null) {
      this.isSortedOrFiltration.emit(false);
    } else {
      this.isSortedOrFiltration.emit(true);
    }
  }
}
