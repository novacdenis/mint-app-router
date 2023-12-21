import { ScadaEventsQuery } from "./scada-events.query";
import { ExportFileType } from "../../enums";

export class ExportScadaEventsQuery extends ScadaEventsQuery {
  exportType?: ExportFileType = "xlsx";
}
