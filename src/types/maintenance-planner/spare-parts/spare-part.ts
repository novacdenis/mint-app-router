import { Farm } from "../../crud";
import { Component, SubComponent } from "../../entities";

export class SparePart {
  id: number;
  name: string;
  quantity: number;
  farmId: number;
  componentId: number;

  farm?: Farm;
  component?: Component;
  subComponentId?: number | null;
  subComponent?: SubComponent;
}
