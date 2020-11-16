import { Ratecurve } from '@app/_models/ratecurve.model';
import { Ratecurvedata } from '@app/_models/ratecurvedata.model';

export const RATECURVEMock: Ratecurve[] = [
  {currency : 'EUR', curvename: 'Swap', curvetype : 'Surface'},
  {currency : 'GBP', curvename: 'Swap', curvetype : 'Surface'},
  {currency : 'USD', curvename: 'Swap', curvetype : 'Surface'},
  {currency : 'JPY', curvename: 'Swap', curvetype : 'Surface'},
  {currency : 'EUR', curvename: 'Libor', curvetype : 'Surface'},
  {currency : 'GBP', curvename: 'Libor', curvetype : 'Surface'},
  {currency : 'USD', curvename: 'Libor', curvetype : 'Surface'},
  {currency : 'JPY', curvename: 'Libor', curvetype : 'Surface'},

]



export const RATECURVEDATAMock: Ratecurvedata[] =
[
  { ratedate: new Date("1998-02-28"), ratematurity :	'3m', ratevalue:	0.010299483663},
  { ratedate: new Date("1998-03-01"), ratematurity :	'3m', ratevalue:	0.010299483663},
  { ratedate: new Date("1998-03-02"), ratematurity :	'3m', ratevalue:	0.010299483663},
  { ratedate: new Date("1998-03-03"), ratematurity :	'3m', ratevalue:	0.010299483663},
  { ratedate: new Date("1998-03-04"), ratematurity :	'3m', ratevalue:	0.010299483663},
  { ratedate: new Date("1998-03-05"), ratematurity :	'3m', ratevalue:	0.010299483663},
  { ratedate: new Date("1998-03-06"), ratematurity :	'3m', ratevalue:	0.010299483663},
  { ratedate: new Date("1998-03-07"), ratematurity :	'3m', ratevalue:	0.010299483663},
  { ratedate: new Date("1998-03-08"), ratematurity :	'3m', ratevalue:	0.010299483663},
  { ratedate: new Date("1998-03-09"), ratematurity :	'3m', ratevalue:	0.010299483663},
  { ratedate: new Date("1998-02-28"), ratematurity :	'6m', ratevalue:	0.010581996778},
  { ratedate: new Date("1998-03-01"), ratematurity :	'6m', ratevalue:	0.010581996778},
  { ratedate: new Date("1998-03-02"), ratematurity :	'6m', ratevalue:	0.010581996778},
  { ratedate: new Date("1998-03-03"), ratematurity :	'6m', ratevalue:	0.010581996778},
  { ratedate: new Date("1998-03-04"), ratematurity :	'6m', ratevalue:	0.010581996778},
  { ratedate: new Date("1998-03-05"), ratematurity :	'6m', ratevalue:	0.010581996778},
  { ratedate: new Date("1998-03-06"), ratematurity :	'6m', ratevalue:	0.010581996778},
  { ratedate: new Date("1998-03-07"), ratematurity :	'6m', ratevalue:	0.010581996778},
  { ratedate: new Date("1998-03-08"), ratematurity :	'6m', ratevalue:	0.010581996778},
  { ratedate: new Date("1998-03-09"), ratematurity :	'6m', ratevalue:	0.010581996778},
  { ratedate: new Date("1998-02-28"), ratematurity :	'9m', ratevalue:	0.010877959754},
  { ratedate: new Date("1998-03-01"), ratematurity :	'9m', ratevalue:	0.010877959754},
  { ratedate: new Date("1998-03-02"), ratematurity :	'9m', ratevalue:	0.010877959754},
  { ratedate: new Date("1998-03-03"), ratematurity :	'9m', ratevalue:	0.010877959754},
  { ratedate: new Date("1998-03-04"), ratematurity :	'9m', ratevalue:	0.010877959754},
  { ratedate: new Date("1998-03-05"), ratematurity :	'9m', ratevalue:	0.010877959754},
  { ratedate: new Date("1998-03-06"), ratematurity :	'9m', ratevalue:	0.010877959754},
  { ratedate: new Date("1998-03-07"), ratematurity :	'9m', ratevalue:	0.010877959754},
  { ratedate: new Date("1998-03-08"), ratematurity :	'9m', ratevalue:	0.010877959754},
  { ratedate: new Date("1998-03-09"), ratematurity :	'9m', ratevalue:	0.010877959754},
  { ratedate: new Date("1998-02-28"), ratematurity :	'1y', ratevalue:	0.011170670390},
  { ratedate: new Date("1998-03-01"), ratematurity :	'1y', ratevalue:	0.011170670390},
  { ratedate: new Date("1998-03-02"), ratematurity :	'1y', ratevalue:	0.011170670390},
  { ratedate: new Date("1998-03-03"), ratematurity :	'1y', ratevalue:	0.011170670390},
  { ratedate: new Date("1998-03-04"), ratematurity :	'1y', ratevalue:	0.011170670390},
  { ratedate: new Date("1998-03-05"), ratematurity :	'1y', ratevalue:	0.011170670390},
  { ratedate: new Date("1998-03-06"), ratematurity :	'1y', ratevalue:	0.011170670390},
  { ratedate: new Date("1998-03-07"), ratematurity :	'1y', ratevalue:	0.011170670390},
  { ratedate: new Date("1998-03-08"), ratematurity :	'1y', ratevalue:	0.011170670390},
  { ratedate: new Date("1998-03-09"), ratematurity :	'1y', ratevalue:	0.011170670390}
]