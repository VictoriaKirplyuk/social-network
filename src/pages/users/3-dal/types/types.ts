import { IResponseError } from '../../../../common/types/api-types/error-types';
import { PageResponse } from '../../../../common/types/api-types/page-types';
import { IUserContent, IUserData } from '../../../../common/types/user-types';

export type ResponseUserData = IUserData & IResponseError;
export type SearchUserResponse = PageResponse<IUserContent>;

export interface ISearchData {
  query?: string;
  country?: string;
  city?: string;
  relationshipStatus?: string;
  age?: number;
  ageFrom?: number;
  ageTo?: number;
  sort?: string[];
  page?: number;
  size?: number;
}
