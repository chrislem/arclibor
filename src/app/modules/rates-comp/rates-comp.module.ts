import { NgModule } from '@angular/core';

import { RatescompviewComponent } from './ratescompview.component';
import { RatecurveComponent } from './ratecurve.component';
import { RateformComponent } from './rateform.component';



@NgModule({
  declarations: [RatescompviewComponent, RatecurveComponent, RateformComponent],
  exports: [RatescompviewComponent, RatecurveComponent]

})
export class RatesCompModule { }
