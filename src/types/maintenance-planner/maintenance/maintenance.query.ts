import { TimeRangePaginationQuery } from "../../common";

export class MaintenanceQuery extends TimeRangePaginationQuery {
  farmIds?: number[];
  turbineIds?: number[];
  entityIds?: number[];
}
