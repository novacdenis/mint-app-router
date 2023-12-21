import { Component } from "./components";
import { ScadaTag } from "./scada-tags";
import { SubComponent } from "./sub-components";
import { Turbine } from "../crud";

export class Entity {
  id: number;
  turbineId: number;

  componentId?: number;
  subComponentId?: number;

  turbine?: Turbine;
  component?: Component;
  subComponent?: SubComponent;
  scadaTags?: ScadaTag[];
}
