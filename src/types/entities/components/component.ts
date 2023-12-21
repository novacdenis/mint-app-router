import { SubComponent } from "../sub-components";

export class Component {
  id: number;
  name: string;

  subComponents?: SubComponent[];
  deletedAt?: Date | null;
}
