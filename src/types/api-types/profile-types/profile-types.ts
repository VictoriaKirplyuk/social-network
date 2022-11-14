import { ProfileAttitude } from '../../../enums';
import { IAddress, IAvatar } from '../../common-types/common-types';
import { IResponseError } from '../error-types/error-types';

export type ProfileResponse = IProfileDataResponseSuccess & IResponseError;

export interface IProfileDataResponseSuccess {
  username: string;
  avatar: IAvatar;
  firstName: string;
  middleName: string | null;
  secondName: string;
  gender: string;
  birthDate: string;
  overview: string | null;
  relationshipStatus: string | null;
  workplace: string | null;
  education: string | null;
  citizenship: string | null;
  registrationAddress: IAddress | null;
  residenceAddress: IAddress | null;
  createAt: string;
  updateAt: string;
  attitude: ProfileAttitude;
}

export interface IChangeAvatar {
  image: string;
}
