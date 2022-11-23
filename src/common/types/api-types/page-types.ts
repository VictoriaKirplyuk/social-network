import { IPageData } from '../page-types';

import { IResponseError } from './error-types';

export type PageResponse<T> = IPageData<T> & IResponseError;
