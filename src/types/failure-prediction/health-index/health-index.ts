import { HealthIndexData } from "./health-index.data";

export class HealthIndex {
  entityId: number;
  interval: string;
  isForecast: boolean;
  data: HealthIndexData[];
}
