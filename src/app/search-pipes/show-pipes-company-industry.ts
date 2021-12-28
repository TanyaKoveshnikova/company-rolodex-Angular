import {Pipe, PipeTransform} from "@angular/core";
import {Config} from "../company-item";
import {CompanyService} from "../company-service.service";

@Pipe({
  name: 'showInd'
})
export class ShowPipesCompanyIndustry implements PipeTransform{

  companyIndustry:any
  constructor( public companyService: CompanyService) {
    this.companyIndustry = this.companyService.companyIndustry;
  }


  transform(companyList:Config[], value:string): Array<Config> {
    if(companyList.length === 0 || value === ''){
      return companyList;
    }
    return companyList.filter((x:any) => {
      if(value === x.industry){
        return x;
      }
    })
  }
}
