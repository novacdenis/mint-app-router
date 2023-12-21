import { TimeRangeQuery } from "../common";

export class TotalProductionQuery extends TimeRangeQuery {
  farmIds?: number[];
  turbineIds?: number[];
}
