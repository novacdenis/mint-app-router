import { Component } from "../components";

export class SubComponent {
  id: number;
  name: string;
  componentId: number;
  component?: Component;
  deletedAt?: Date | null;
}
