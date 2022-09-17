import { IResponseError } from '../../../../../types/api-types/error-types/error-types';

export type LoginResponse = ILoginResponseSuccess & IResponseError;

export interface ILoginResponseSuccess {
  jwtToken: string;
}
