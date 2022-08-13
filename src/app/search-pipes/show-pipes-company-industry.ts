import {Pipe, PipeTransform} from "@angular/core";
import {ICompanyItem} from "../company-item.interface";
import {CompanyService} from "../services/company-service.service";

@Pipe({
  name: 'showInd'
})
export class ShowPipesCompanyIndustry implements PipeTransform {
  companyIndustry: any

  constructor(public companyService: CompanyService) {
    this.companyIndustry = this.companyService.companyIndustry;
  }

  transform(companyList: ICompanyItem[], value: string): Array<ICompanyItem> {
    if (companyList.length === 0 || value === '') {
      return companyList;
    }
    return companyList.filter((x: any) => {
      if (value === x.industry) {
        return x;
      }
    })
  }
}
