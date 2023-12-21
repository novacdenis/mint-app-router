import { Entity } from "../../entities";
import { ScadaEventType } from "../../enums";

export class ScadaEvent {
  id: string;
  timestamp: Date | string;
  type: ScadaEventType;
  duration?: number;
  description?: string;
  entityId: number;
  entity?: Entity;
  createdAt: Date | string;
  updatedAt: Date | string;
}
