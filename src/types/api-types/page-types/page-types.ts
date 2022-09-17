import { IResponseError } from '../error-types/error-types';

export type PageResponse<T> = IPageResponseSuccess<T> & IResponseError;

interface IPageResponseSuccess<T> {
  totalElements: number;
  totalPages: number;
  sort: ISort;
  size: 0;
  content: T[];
  number: number;
  pageable: IPageable;
  first: boolean;
  numberOfElements: number;
  last: boolean;
  empty: boolean;
}

interface ISort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

interface IPageable {
  sort: ISort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
  paged: boolean;
}
