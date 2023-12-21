import { TimeRangeQuery } from "../../common";
import { FrequencyEnum } from "../../enums";

export class ProfitQuery extends TimeRangeQuery {
  farmIds?: number[];
  turbineIds?: number[];
  frequency: FrequencyEnum;
}
