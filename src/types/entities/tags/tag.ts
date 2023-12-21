import { Component } from "../components";
import { ScadaTagTurbine } from "../scada-tags";
import { SubComponent } from "../sub-components";
import { Unit } from "../units";

export class Tag {
  id: number;
  name: string;
  isRelevant: boolean;

  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt: Date | string;

  unitId?: number;
  componentId?: number;
  subComponentId?: number;

  unit?: Unit;
  component?: Component;
  subComponent?: SubComponent;

  scadaTags?: ScadaTagTurbine[];
}
