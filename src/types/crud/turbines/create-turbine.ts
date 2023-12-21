import { SizeCategory } from "../../enums";

export class CreateTurbine {
  alias: string;

  brand?: string;
  model?: string;
  powerNominal?: number;
  category?: SizeCategory;
  isActive?: boolean;
  latitude?: number;
  longitude?: number;

  farmId: number;
}
