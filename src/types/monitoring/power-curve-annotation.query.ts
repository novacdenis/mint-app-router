import { PowerCurveQuery } from "./power-curve.query";
import { ProductionAnnotationCategory } from "../enums";

export class PowerCurveAnnotationQuery extends PowerCurveQuery {
  category?: ProductionAnnotationCategory;
  filter?: string;
}
