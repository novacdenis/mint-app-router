import { SizeCategory } from "../../enums";
import { Farm } from "../farms";

export class Turbine {
  id: number;
  alias: string;

  brand?: string;
  model?: string;
  powerNominal?: number;
  category?: SizeCategory;
  latitude?: number;
  longitude?: number;
  isActive?: boolean;

  createdAt: Date;
  updatedAt: Date;
  farmId: number;

  farm?: Farm;
  deletedAt?: Date | null;
}
