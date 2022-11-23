import { IResponseError } from './error-types';

export type AuthResponse = IAuthResponseSuccess & IResponseError;

interface IAuthResponseSuccess {
  status: string;
  continuationCode: string;
}
