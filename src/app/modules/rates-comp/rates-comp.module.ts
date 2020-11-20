import { NgModule } from '@angular/core';

import { RatescompviewComponent } from './ratescompview.component';
import { RatecurveComponent } from './ratecurve.component';
import { RateformComponent } from './rateform.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [RatescompviewComponent, RatecurveComponent, RateformComponent],
  exports: [RatescompviewComponent, RatecurveComponent],
  imports: [
    CommonModule
  ],
})
export class RatesCompModule { }
