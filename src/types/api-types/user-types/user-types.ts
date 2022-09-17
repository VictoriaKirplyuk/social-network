import { IResponseError } from '../error-types/error-types';

export type ResponseUserData = IUserDataResponseSuccess & IResponseError;

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
