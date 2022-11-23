import { ProfileAttitude } from '../../enums';

import { IAddress, IAvatar } from './user-types';

export interface IProfileData {
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