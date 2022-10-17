import { IResponseError } from '../error-types/error-types';
import { PageResponse } from '../page-types/page-types';

export type ResponseUserData = IUserDataResponseSuccess & IResponseError;
export type SearchUserResponse = PageResponse<IUserContent>;

export interface IUserDataResponseSuccess {
  email: string;
  username: string;
  avatar: IAvatar;
  images: string[];
  firstName: string;
  middleName: string;
  secondName: string;
  birthDate: string;
  createAt: string;
  updateAt: string;
}

export interface IAvatar {
  mimeType: string;
  height: number;
  width: number;
  dataSize: string;
  createAt: string; // Date
}

export interface IUserContent {
  username: string;
  firstName: string;
  middleName: string;
  secondName: string;
}

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
