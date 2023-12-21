import { Mapping } from "./mapping";
import { Farm } from "../crud";
import { DataHubFileType, DataHubStatus } from "../enums";

export class File {
  id: string;
  status: DataHubStatus;
  fileName: string;
  fileType: DataHubFileType;
  mapping?: Mapping;
  comments?: string;
  createdAt: Date;
  updatedAt: Date;
  farmId: number;
  uploadedByUserId: string;
  farm?: Farm;
  uploadedBy?: {
    firstName: string;
    lastName: string;
  };
}
