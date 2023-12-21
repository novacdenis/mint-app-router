export class CreateSparePart {
  farmId: number;
  name: string;
  quantity: number;
  componentId: number;

  subComponentId?: number | null;
}
