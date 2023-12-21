import { CreateAnnotation } from "../../annotations";
import { AnnotationCategory } from "../../enums";

export class CreateHealthIndexAnnotation extends CreateAnnotation {
  category: AnnotationCategory;
  entityId: number;
}
