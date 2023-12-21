import { ScadaData } from "./scada.data";

export class Scada {
  scadaTagId: number;
  startTime: Date;
  endTime: Date;
  interval: string;
  data: ScadaData[];
}
