export interface Ratecurve {
        currency: string;
        curvename: string;
        curvetype: string;
}

export interface Ratecurvedata {
    curve: Ratecurve;
    name: string;
    maturity: string;
    transformation: string;
    series: Array<{date: Date, value: number}>;

}