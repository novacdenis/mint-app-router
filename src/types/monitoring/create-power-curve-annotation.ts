import { CreateAnnotation } from "../annotations";
import { ProductionAnnotationCategory } from "../enums";

export class CreatePowerCurveAnnotation extends CreateAnnotation {
  turbineId: number;
  category: ProductionAnnotationCategory;
  windSpeed: number;
  power: number;
}
