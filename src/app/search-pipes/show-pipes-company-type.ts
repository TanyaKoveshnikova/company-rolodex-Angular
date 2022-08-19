import {Pipe, PipeTransform} from "@angular/core";
import {ICompanyItem} from "../company-item.interface";
import {CompanyService} from "../services/company-service.service";

@Pipe({
  name: 'show'
})
export class ShowPipesCompanyType implements PipeTransform {

  companyType: any

  constructor(public companyService: CompanyService) {
    this.companyType = this.companyService.companyType;
  }


  transform(companyList: ICompanyItem[], value: string): Array<ICompanyItem> {
    if (companyList.length === 0 || value === '') {
      return companyList;
    }
    return companyList.filter((x: any) => {
      if (value === x.type) {
        return x;
      }
    })
  }
}
