import { MaintenanceQuery } from "./maintenance.query";
import { ExportFileType } from "../../enums/export.type";

export class ExportMaintenanceQuery extends MaintenanceQuery {
  type?: ExportFileType;
}
