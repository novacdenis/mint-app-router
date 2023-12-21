import { TimeRangeQuery } from "../common";

export class WindRoseQuery extends TimeRangeQuery {
  farmIds?: number[];
  turbineIds?: number[];
}
