import { Entity } from "../entities";

export class Alarm {
  timestamp: Date;
  threshold: number;
  recommendation: string;
  healthIndex?: number;
  isForecast?: boolean;
  entityId: number;
  createdAt: Date;
  updatedAt: Date;

  entity?: Entity;
}
