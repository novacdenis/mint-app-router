import { Entity } from "../entity";

export class ScadaTag {
  id: number;
  tag: string;
  isRelevant: boolean;
  unit?: string;
  entityId: number;
  entity?: Entity;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
