import {Pipe, PipeTransform} from "@angular/core";
import {ICompanyItem} from "../company-item.interface";


const getTypeSort = (value: string): string => {
  switch (value) {
    case 'on type company':
      return 'type'
    case 'on name company':
      return 'business_name'
    case 'on industry':
      return 'industry'
  }

  return ''
}

@Pipe({
  name: 'companySort'
})
export class SearchPipesName implements PipeTransform {
  transform(companyList: ICompanyItem[], value: string): Array<ICompanyItem> {
    let valueSort = getTypeSort(value);
    if (companyList.length === 0 || value === '') {
      return companyList;
    }
    return companyList.sort(function (a: any, b: any) {
      let nameA = a[valueSort].toLowerCase(), nameB = b[valueSort].toLowerCase()
      if (nameA < nameB)
        return -1
      if (nameA > nameB)
        return 1
      return 0
    })
  }
}
