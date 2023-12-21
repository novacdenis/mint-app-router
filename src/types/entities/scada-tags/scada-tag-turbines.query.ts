import { PageOptions } from "../../common";

export class ScadaTagTurbinesQuery extends PageOptions {
  farmIds?: number[];
  turbineIds?: number[];
  componentIds?: number[];
  subComponentIds?: number[];
  tagIds?: number[];
  unitIds?: number[];
}
