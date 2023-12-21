import { TimeRangePaginationQuery } from "../common";
import { AnnotationCategory } from "../enums";

export class AnnotationQuery extends TimeRangePaginationQuery {
  farmIds?: number[];
  turbineIds?: number[];
  entityIds?: number[];
  category?: AnnotationCategory;
}
