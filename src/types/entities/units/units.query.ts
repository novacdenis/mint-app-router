import { PageOptions } from "../../common";

export class UnitsQuery extends PageOptions {
  farmIds?: number[];
  turbineIds?: number[];
  componentIds?: number[];
  subComponentIds?: number[];
}
