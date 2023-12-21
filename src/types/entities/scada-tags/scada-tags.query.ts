import { PageOptions } from "../../common";

export class ScadaTagsQuery extends PageOptions {
  farmIds?: number[];
  turbineIds?: number[];
  componentIds?: number[];
  subComponentIds?: number[];
  entityIds?: number[];
}
