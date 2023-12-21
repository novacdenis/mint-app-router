import { TimeRangePaginationQuery } from "../common";

export class AnomalyAlertQuery extends TimeRangePaginationQuery {
  farmIds?: number[];
  turbineIds?: number[];
  componentIds?: number[];
  subComponentIds?: number[];
  sparePartIds?: number[];
}
