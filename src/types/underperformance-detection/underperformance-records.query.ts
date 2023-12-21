import { TimeRangePaginationQuery } from "../common";

export class UnderperformanceRecordsQuery extends TimeRangePaginationQuery {
  farmIds?: number[];
  turbineIds?: number[];
  showControlSystems?: boolean;
}
