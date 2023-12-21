import { PageMeta } from "./page-meta";

export class Page<T> {
  data: T[];
  meta: PageMeta;

  constructor(data: T[], meta: PageMeta) {
    this.data = data;
    this.meta = meta;
  }
}
