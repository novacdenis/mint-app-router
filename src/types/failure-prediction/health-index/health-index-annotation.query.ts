import { HealthIndexQuery } from "./health-index.query";
import { AnnotationCategory } from "../../enums";

export class HealthIndexAnnotationQuery extends HealthIndexQuery {
  category?: AnnotationCategory;
  filter?: string;
}
