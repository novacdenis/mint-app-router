import { PageOptions } from "../common";
import { DataHubFileType, DataHubStatus } from "../enums";

export class FilesQuery extends PageOptions {
  farmIds?: number[];
  status?: DataHubStatus;
  fileTypes?: DataHubFileType[];
  fileExtension?: string;
  isSupported?: boolean;
}
