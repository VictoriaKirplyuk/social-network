import { ProfileAttitude } from '../../../enums';
import { IResponseError } from '../error-types/error-types';
import { IAvatar } from '../user-types/user-types';

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
  attitude: ProfileAttitude;
}

export interface IChangeAvatar {
  image: string;
}
