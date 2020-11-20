import { Component, OnInit } from '@angular/core';
import {multi} from '@app/_mockdata/mockdata'
import {ratecurveEUR} from '@app/_mockdata/ratecurveEUR'
import { ArcServiceRateService } from '@app/_services/arc-service-rate.service';

@Component({
  selector: 'app-ratecurve',
  templateUrl: './ratecurve.component.html',
  styleUrls: ['./ratecurve.component.scss']
})
export class RatecurveComponent  {
  multi: any[];
  ratecurves: any[];
  view: any[] = [1000, 400];

   // options
   legend: boolean = true;
   showLabels: boolean = true;
   animations: boolean = true;
   xAxis: boolean = true;
   yAxis: boolean = true;
   showYAxisLabel: boolean = true;
   showXAxisLabel: boolean = true;
   xAxisLabel: string = 'Date';
   yAxisLabel: string = 'Rate';
   timeline: boolean = true;
  
   colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
//private arcRateService: ArcServiceRateService
  constructor() {
   Object.assign(this, { multi });
   this.ratecurves = ['EUR.LIBOR', 'GBP.LIBOR']

  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


}
