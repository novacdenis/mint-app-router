import { User } from "../../crud";
import { Entity } from "../../entities";
import { MaintenanceAction, MaintenanceStatus } from "../../enums";
import { SparePart } from "../spare-parts";

export class Maintenance {
  id: number;
  status: MaintenanceStatus;
  country: string;
  action: MaintenanceAction;
  createdAt: Date;
  updatedAt: Date;
  entityId: number;
  createdById: string;

  maintenanceTimestamp?: Date;
  failureTimestamp?: Date;
  downtime?: number;
  windSpeedForecast?: number;
  humidityForecast?: number;
  temperatureForecast?: number;
  isSuitable?: boolean;
  cost?: string;
  comments?: string;
  resetValue?: number | null;
  responsibles?: User[];
  sparePartId?: number;
  sparePart?: SparePart;
  createdBy?: User;
  entity?: Entity;
}
