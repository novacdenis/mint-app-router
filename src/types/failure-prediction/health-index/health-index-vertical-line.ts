import { Maintenance } from "../../maintenance-planner";
import { Alarm } from "../alarm";

export class HealthIndexVerticalLine {
  timestamp: number;
  type: "maintenance" | "alarm";
  entityId: number;
  maintenance?: Maintenance;
  alarm?: Alarm;
}
