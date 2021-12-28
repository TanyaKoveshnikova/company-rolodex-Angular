import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {CompanyService} from "../company-service.service";
import {Config} from "../company-item";

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['./company-filter.component.scss']
})
export class CompanyFilterComponent implements OnInit {
  registrationForm:any;
  companyArray!:Config[];
  companyType:any

  constructor(public fb: FormBuilder,
              public companyService: CompanyService) {

    this.registrationForm = this.fb.group({
      typeCompany: ['']
    })
    this.companyArray = this.companyService.company;
  }

  ngOnInit(): void {
    this.getUnicTypesCompany()
  }

  public getUnicTypesCompany(){
    const company = this.companyService.company;
    let arrayTypes =[];
    for(let i of company){
      arrayTypes.push(i.type);
    }

    const uniqueSet = new Set(arrayTypes);
    this.companyService.companyType = [...uniqueSet];
    this.companyType = this.companyService.companyType;
  }

  onSubmit() {
    this.companyService.registrationFormType =  JSON.stringify(this.registrationForm.value);
    alert(JSON.stringify(this.registrationForm.value))
    // this.companyUnicTypes();
  }
  // public  companyUnicTypes(): void{
  //   let h = this.companyArray.filter((x:any) => {
  //     for(let i in this.com){
  //       if(i === x.type){
  //         return x;
  //       }
  //     }
  //   })
  //   this.companyService.company = h;
  // }

  get typeCompany() {
    return this.registrationForm.get('type');
  }

  changeCompanyType(e:any) {
    this.typeCompany.setValue(e.target.value, {
      onlySelf: true
    })
  }
}
