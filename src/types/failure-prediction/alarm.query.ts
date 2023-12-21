import { TimeRangePaginationQuery } from "../common";

export class AlarmQuery extends TimeRangePaginationQuery {
  farmIds?: number[];
  turbineIds?: number[];
  componentIds?: number[];
  subComponentIds?: number[];
  entityIds?: number[];
}
