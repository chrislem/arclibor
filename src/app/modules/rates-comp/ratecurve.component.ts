import { Component, OnInit } from '@angular/core';
// import { LegendPosition, ChartType } from '@ffdc/uxg-angular-components/chart';

@Component({
  selector: 'app-ratecurve',
  templateUrl: './ratecurve.component.html',
  styleUrls: ['./ratecurve.component.scss']
})
export class RatecurveComponent  {

  // legendPosition = LegendPosition.horizontalBottomCenter;

  // traces = [
  //   {
  //     dimension: ['Banks', 'Foods', 'Energies'],
  //     dimensionName: 'Industry',
  //     measure: [100, 50, 70],
  //     measureName: 'PNL',
  //     type: ChartType.spline,
  //     orientation: 'horizontal'
  //   },
  //   {
  //     dimension: ['Banks', 'Foods', 'Energies'],
  //     dimensionName: 'Industry',
  //     measure: [75, 10, 90],
  //     measureName: 'Asset Values',
  //     type: ChartType.spline,
  //     orientation: 'horizontal'
  //   }
  // ];

  constructor() {}

  onClick(event: Array<object>) {
    console.log('simple click: ', event);
  }

  onSelected(event: Array<object>) {
    console.log('simple click list items selected: ', event);
  }

  onDoubleClick(event: Array<object>) {
    console.log('double click: ', event);
  }
}
