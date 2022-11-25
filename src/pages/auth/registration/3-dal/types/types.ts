import { IResponseError } from '../../../../../common/types/api-types/error-types';
import { IUserData } from '../../../../../common/types/user-types';

export type UserRegistrationResponseData = IUserData & IResponseError;

export interface IRegistrationUserData {
  password: string;
  username: string;
  firstName: string;
  middleName: string;
  secondName: string;
  gender: string;
  birthDate: string; // Date
}
