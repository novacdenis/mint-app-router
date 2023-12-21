import { FarmType } from "../../enums";

export class CreateFarm {
  companyId: string;
  name: string;
  latitude: number;
  longitude: number;
  type: FarmType;
}
