import {Pipe, PipeTransform} from "@angular/core";
import {Config} from "../company-item";

@Pipe({
  name: 'search'
})
export class SearchPipesName implements PipeTransform{
  transform(companyList:Config[], value:string): Array<Config> {
    return companyList.filter((company:any) => {
      return company.business_name.includes(value) || company.type.includes(value)
        || company.industry.includes(value);
    })
  }
}
