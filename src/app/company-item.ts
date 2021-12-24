// export const CompanyItem =  fetch('https://random-data-api.com/api/company/random_company?size=100')
// .then(res => { return res.json()})


export interface Config{
  logo?:string,
  id:number,
  business_name?: string,
  suffix?:string,
  industry?: string,
  type?:string,
  catch_phrase?: string,
  phone_number?: string,
  full_address?: string
}
