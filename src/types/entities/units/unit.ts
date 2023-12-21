import { Tag } from "../tags";

export class Unit {
  id: number;
  name: string;
  unit: string;

  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt: Date | string;

  tags?: Tag[];
}
