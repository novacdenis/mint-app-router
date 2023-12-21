import { TimeRangeQuery } from "../common";

export class UnderperformanceQuery extends TimeRangeQuery {
  farmIds?: number[];
  turbineIds?: number[];
}
