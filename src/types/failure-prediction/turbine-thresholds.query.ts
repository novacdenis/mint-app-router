import { TimeRangeQuery } from "../common";

export class TurbineThresholdsQuery extends TimeRangeQuery {
  farmIds?: number[];
  turbineIds?: number[];
}
