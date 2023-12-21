import { ScadaEventType } from "../../enums";

export class CreateScadaEvent {
  timestamp: Date;
  type: ScadaEventType;
  description: string;
  duration?: number;
  entityId: number;
}
