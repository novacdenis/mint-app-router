export class UnderperformanceRecords {
  timestamp: Date;
  severity: number;
  turbineAlias: string;
  turbineId: number;
  action: string;
  scadaTag: string;
  scadaTagId: number;
  unit: string;
  power: number;
  expectedPower: number;
  deviationFromPower: number;
  deviationFromOptimal: number;
}
