import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {  users, ratecurves } from '@app/_mockdata/mockdata';
import { Observable } from 'rxjs';
import {basis, currencies} from '@app/_models/defaultvalues'


export interface reqResult{
  pid: string;
  process: any[];
  progress: string;
  result: any[];
  status: string;
  tasktype: string;
  type: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('configadmin:configadmin'),
  
  })
};

type curveRecord = [string, number, Date,string,string,string]

@Injectable({
  providedIn: 'root'
})
export class ArcServiceRateService {

  constructor(private httpClient: HttpClient) { 

  }

  getCurrencies(){
    return currencies
  }

  getBasis(){
    return basis
  }

getUsers(){
  return users;
}

getCurvesForCurrency(currency: string)
{
  var surfaces = [];
  ratecurves.forEach(function (value) {
    if(value.currency == currency)
      surfaces.push(value.curvename)
  }); 
  return surfaces;
}


sendPostRequest(data: any): Observable<any> {
  return this.httpClient.post<any>('http://localhost:32412/services/RateARRCurve', JSON.stringify(data),httpOptions);
}



}