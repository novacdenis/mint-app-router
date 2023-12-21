import { HealthIndexQuery } from "./health-index.query";
import { ExportFileType } from "../../enums";

export class ExportHealthIndexQuery extends HealthIndexQuery {
  type?: ExportFileType;
}
