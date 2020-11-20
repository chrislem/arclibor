import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { basis, currencies, periodicity } from '@app/_models/defaultvalues';
import { ArcServiceRateService } from '@app/_services/arc-service-rate.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-rateform',
  templateUrl: './rateform.component.html',
  styleUrls: ['./rateform.component.scss']
})
export class RateformComponent implements OnInit {

  currencies = currencies
  basislist = basis
  periodicities = periodicity

  

  currency = new FormControl();
  basis = new FormControl();
  periodicity = new FormControl();
  curvemode = new FormControl();
  curvemethod  = new FormControl();

 

  isCurveDisable = true;
  isOtherDisable = true;



  constructor(private arcRateService: ArcServiceRateService) { 
    console.log('constructor')
  }

  ngOnInit(): void {
    // this.filteredOptions = this.myControl.valueChanges
    // .pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );
 
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }

  // getCurvePerCurrency(currency: string)
  // {
  //   this.surfaces=[]  
  //   console.log('new event:'+currency);
  //   console.log(this.arcRateService.getCurvesForCurrency(currency));
  //   this.isCurveDisable=false;
  //   this.isOtherDisable=true;
  //   this.surfaces = this.arcRateService.getCurvesForCurrency(currency);

  // }

  // enableOther()
  // {
  //   this.isOtherDisable=false;
  // }

  submitRateDef() {
    //   console.log(this.currency.value);
    //   console.log(this.startdate.value);
    //   console.log(this.surface.value);
    //   console.log(this.basis.value);
    //   console.log(this.maturity.value);

    //   this.arcRateService.sendPostRequest({
    //     records:[{
    //       Currency : this.currency.value, 
    //       IterationNumber : 400,
    //       ObservationDate: '15/12/2020',
    //       HistoryName: this.surface.value,
    //       RateMaturity: '3m',
    //       RateType: this.basis.value
    //     }]
    // }).subscribe(
    //     res => {
    //       console.log(res);
    //     }
  //);


  }

 

}
