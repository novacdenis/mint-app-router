import { MaintenanceAction, MaintenanceStatus } from "../../enums";

export class CreateMaintenance {
  entityId: number;

  status: MaintenanceStatus;
  country: string;
  action: MaintenanceAction;

  failureTimestamp?: Date;
  maintenanceTimestamp?: Date;
  downtime?: number;
  temperatureForecast?: number;
  humidityForecast?: number;
  windSpeedForecast?: number;
  isSuitable?: boolean;
  cost?: string;
  comments?: string;
  responsibles?: string[];
  sparePartId?: number | null;
  resetValue?: number | null;
}
