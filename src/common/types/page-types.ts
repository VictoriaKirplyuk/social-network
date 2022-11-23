export interface IPageData<T> {
  totalElements: number;
  totalPages: number;
  sort?: ISort;
  size: number;
  content: T[];
  number: number;
  pageable?: IPageable;
  first?: boolean;
  numberOfElements?: number;
  last?: boolean;
  empty?: boolean;
  hasNext: boolean;
}

export interface ISort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface IPageable {
  sort: ISort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
  paged: boolean;
}
