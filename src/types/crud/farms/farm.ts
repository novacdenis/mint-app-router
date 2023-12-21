import { FarmType } from "../../enums";
import { Company } from "../companies";
import { Turbine } from "../turbines";

export class Farm {
  id: number;
  companyId: string;
  name: string;
  type: FarmType;
  latitude: number;
  longitude: number;
  createdAt: Date;
  updatedAt: Date;

  turbines?: Turbine[];
  company?: Company;
  deletedAt?: Date | null;
}
