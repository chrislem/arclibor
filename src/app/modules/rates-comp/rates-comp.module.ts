import { NgModule } from '@angular/core';

import { RatescompviewComponent } from './ratescompview.component';
import { RatecurveComponent } from './ratecurve.component';



@NgModule({
  declarations: [RatescompviewComponent, RatecurveComponent],
  exports: [RatescompviewComponent, RatecurveComponent]

})
export class RatesCompModule { }
