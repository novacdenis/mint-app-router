import { PageOptions } from "../../common";

export class TagsQuery extends PageOptions {
  farmIds?: number[];
  turbineIds?: number[];
  componentIds?: number[];
  subComponentIds?: number[];
}
