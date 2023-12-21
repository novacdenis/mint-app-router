import { DataHubStatus } from "../enums";

export class UpdateDataHubBody {
  status?: DataHubStatus;
  comments?: string;
}
