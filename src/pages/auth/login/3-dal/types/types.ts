import { IResponseError } from '../../../../../common/types/api-types/error-types';

export type LoginResponse = ILoginResponseSuccess & IResponseError;

export interface ILoginResponseSuccess {
  jwtToken: string;
}
