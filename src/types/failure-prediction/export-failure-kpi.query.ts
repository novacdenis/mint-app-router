import { FailureKpiQuery } from "./failure-kpi.query";
import { ExportFileType } from "../enums/export.type";

export class ExportFailureKpiQuery extends FailureKpiQuery {
  type?: ExportFileType;
}
