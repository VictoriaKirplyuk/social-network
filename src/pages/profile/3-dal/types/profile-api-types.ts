import { IResponseError } from '../../../../types/api-types/error-types/error-types';
import { IAvatar } from '../../../../types/api-types/user-types/user-types';

export type ProfileResponse = IProfileDataResponseSuccess & IResponseError;

export interface IProfileDataResponseSuccess {
  username: string;
  avatar: IAvatar;
  firstName: string;
  middleName: string;
  secondName: string;
  overview: string;
  relationshipStatus: string;
  city: string;
  workplace: string;
  education: string;
  birthDate: string;
  createAt: string;
  updateAt: string;
}

export interface IChangeAvatar {
  image: string;
}
