import { TimeRangeQuery } from "../../common";

export class HealthIndexQuery extends TimeRangeQuery {
  farmIds?: number[];
  turbineIds?: number[];
  componentIds?: number[];
  subComponentIds?: number[];
  entityIds?: number[];

  minHealthIndex?: number;
  maxHealthIndex?: number;
}
