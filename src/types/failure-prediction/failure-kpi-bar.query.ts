import { TimeRangeQuery } from "../common";

export class FailureKpiBarQuery extends TimeRangeQuery {
  farmIds?: number[];
  turbineIds?: number[];
  componentIds?: number[];
  subComponentIds?: number[];
  entityIds?: number[];
}
