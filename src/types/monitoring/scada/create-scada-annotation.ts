import { CreateAnnotation } from "../../annotations";
import { AnnotationCategory } from "../../enums";

export class CreateScadaAnnotation extends CreateAnnotation {
  category: AnnotationCategory;
  scadaTagId: number;
}
