import { Turbine } from "../crud";

export class PowerCurveAnnotation {
  id: number;
  annotation: string;
  turbineId: number;
  category: string;
  timestamp: number | Date;
  power: number;
  windSpeed: number;
  turbine: Turbine;
}
