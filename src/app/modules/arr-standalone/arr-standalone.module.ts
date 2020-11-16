import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARRStandaloneRoutingModule } from './arr-standalone-routing.module';
import { ARRFormComponent } from './arr-form.component';


@NgModule({
  declarations: [ARRFormComponent],
  imports: [
    CommonModule,
    ARRStandaloneRoutingModule
  ]
})
export class ARRStandaloneModule { }
