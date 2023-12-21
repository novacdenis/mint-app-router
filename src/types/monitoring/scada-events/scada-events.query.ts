import { PageOptions } from "../../common";
import { ScadaEventType } from "../../enums";

export class ScadaEventsQuery extends PageOptions {
  startTime?: Date | string;
  endTime?: Date | string;
  farmIds?: number[];
  turbineIds?: number[];
  componentIds?: number[];
  subComponentIds?: number[];
  entityIds?: number[];
  type?: ScadaEventType;
}
