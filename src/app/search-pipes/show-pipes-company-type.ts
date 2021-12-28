import {Pipe, PipeTransform} from "@angular/core";
import {Config} from "../company-item";
import {CompanyService} from "../company-service.service";

@Pipe({
  name: 'show'
})
export class ShowPipesCompanyType implements PipeTransform{
  constructor( public companyService: CompanyService) {
  }
  transform(companyList:Config[], value:string): Array<Config> {
     return companyList.filter((x:any) => {
       let chooseItem = this.companyService.registrationFormType;
       if(chooseItem === x.type){
          return x;
        }
    })
  }
}
