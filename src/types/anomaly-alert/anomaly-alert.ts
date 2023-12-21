import { Entity } from "../entities";
import { SparePart } from "../maintenance-planner/spare-parts";

export class AnomalyAlert {
  timestamp: Date;
  maximumLeadTime: Date;
  context: string;
  entityId: number;
  sparePartId: number;
  createdAt: Date;
  updatedAt: Date;

  entity?: Entity;
  sparePart?: SparePart;
}
