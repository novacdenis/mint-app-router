import { ScadaQuery } from "./scada.query";
import { AnnotationCategory } from "../../enums";

export class ScadaAnnotationQuery extends ScadaQuery {
  category?: AnnotationCategory;
  filter?: string;
}
