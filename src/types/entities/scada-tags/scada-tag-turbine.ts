import { Turbine } from "../../crud";
import { Tag } from "../tags";

export class ScadaTagTurbine {
  id: number;
  tagId: number;
  turbineId: number;

  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt: Date | string;

  turbine?: Turbine;
  newScadaTag?: Tag;
}
