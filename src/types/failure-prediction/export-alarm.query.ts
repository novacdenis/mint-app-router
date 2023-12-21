import { AlarmQuery } from "./alarm.query";
import { ExportFileType } from "../enums";

export class ExportAlarmQuery extends AlarmQuery {
  type?: ExportFileType;
}
