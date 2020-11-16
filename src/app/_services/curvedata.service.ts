import { Injectable } from '@angular/core';
import { Ratecurve } from '@app/_models/ratecurve.model';
import { Ratecurvedata } from '@app/_models/ratecurvedata.model';
import { RATECURVEDATAMock, RATECURVEMock } from './mock-data.service';

@Injectable({
  providedIn: 'root'
})
export class CurvedataService {

  ratecurves : Ratecurve[];

  constructor() { }

  getRateCurvesList(): Ratecurve[]
  {
    return RATECURVEMock;
  }

  getRateCurvesData(currency: string, curvename: string, startdate: Date, nbdate: number, ndstepdate: number,
                    nbmaturity: number, valuespaced: number, extractiontype: string
    ): Ratecurvedata[]
  {
    return RATECURVEDATAMock;
  }


}
