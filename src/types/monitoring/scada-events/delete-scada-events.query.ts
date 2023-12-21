import { TimeRangeQuery } from "../../common";

export class DeleteScadaEventsQuery extends TimeRangeQuery {
  farmIds?: number[];
  turbineIds?: number[];
  componentIds?: number[];
  subComponentIds?: number[];
  entityIds?: number[];
}
