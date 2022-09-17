import { IResponseError } from '../error-types/error-types';

export type AuthResponse = IAuthResponseSuccess & IResponseError;

interface IAuthResponseSuccess {
  status: string;
  continuationCode: string;
}
