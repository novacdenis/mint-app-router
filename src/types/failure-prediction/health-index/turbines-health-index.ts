import { ComponentHealthIndex } from "./component-health-index";

export class TurbinesHealthIndex {
  farmId: number;
  turbineId: number;
  healthIndex: number | null;
  alias: string;

  longitude?: number;
  latitude?: number;
  entityId?: number;
  components?: ComponentHealthIndex[];
}
