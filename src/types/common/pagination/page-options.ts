export class PageOptions {
  filter?: string;
  orderByField?: string;
  order?: "asc" | "desc";
  page?: number = 1;
  take?: number = 10;
  showDeleted?: boolean;
}
