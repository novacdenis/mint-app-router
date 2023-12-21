import { PageOptions } from "../pagination";

export class TimeRangePaginationQuery extends PageOptions {
  startTime?: Date | string;
  endTime?: Date | string;
}
