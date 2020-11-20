import { Ratecurve } from '../_models/ratecurve';

export const ratecurves : Array<Ratecurve> =[
  {currency: 'CHF', curvename:'Discounting', curvetype:'standard'},
  {currency: 'CHF', curvename:'LIBOR', curvetype:'libor'},
  {currency: 'CHF', curvename:'SARON', curvetype:'arr'},
  {currency: 'EUR', curvename:'Discounting', curvetype:'standard'},
  {currency: 'EUR', curvename:'EURIBOR', curvetype:'libor'},
  {currency: 'EUR', curvename:'ESTER', curvetype:'arr'},
  {currency: 'GBP', curvename:'Discounting', curvetype:'standard'},
  {currency: 'GBP', curvename:'LIBOR', curvetype:'libor'},
  {currency: 'GBP', curvename:'SONIA', curvetype:'arr'},
  {currency: 'JPY', curvename:'Discounting', curvetype:'standard'},
  {currency: 'JPY', curvename:'LIBOR', curvetype:'libor'},
  {currency: 'JPY', curvename:'TONAR', curvetype:'arr'},
  {currency: 'USD', curvename:'Discounting', curvetype:'standard'},
  {currency: 'USD', curvename:'LIBOR', curvetype:'libor'},
  {currency: 'USD', curvename:'TONAR', curvetype:'arr'}
]




export var users = [
{
  "name": "AAAAAA",
  "address": "xxxxxx",
  "country": "zzzzzzz"
},
{
  "name": "ABCDE",
  "address": "xxxxxx",
  "country": "zzzzzzz"
},
{
  "name": "DEFGH",
  "address": "xxxxxx",
  "country": "zzzzzzz"
},
{
  "name": "KKKKKDDD",
  "address": "xxxxxx",
  "country": "zzzzzzz"
}
]

export var multi = [
  {

    //  curve: {currency: 'EUR', curvename:'EURIBOR', curvetype:'libor'},
      "name": "test",
      //maturity: '3m',
      //transformation: 'A0',
      "series": [
      {"name" : "2020-12-15", "value" : 0.0021343},
      {"name" : "2020-12-16", "value" : 0.00221280821590518},
      {"name" : "2020-12-17", "value" : 0.00228767886924848},
      {"name" : "2020-12-18", "value" : 0.00235947349274453},
      {"name" : "2020-12-19", "value" : 0.00242819192307615},
      {"name" : "2020-12-20", "value" : 0.00249383400391995},
      {"name" : "2020-12-21", "value" : 0.00255639958594936},
      {"name" : "2020-12-22", "value" : 0.00261588852683674}]
      },
      {"name": "test2",
      //maturity: '3m',
      //transformation: 'A0',
      "series": [
      {"name" : "2020-12-15", "value" : 0.00214343},
      {"name" : "2020-12-16", "value" : 0.00221280821590518},
      {"name" : "2020-12-17", "value" : 0.002248767886924848},
      {"name" : "2020-12-18", "value" : 0.002435947349274453},
      {"name" : "2020-12-19", "value" : 0.002442819192307615},
      {"name" : "2020-12-20", "value" : 0.002549383400391995},
      {"name" : "2020-12-21", "value" : 0.002555639958594936},
      {"name" : "2020-12-22", "value" : 0.002615588852683674}]
      },
  ];
  