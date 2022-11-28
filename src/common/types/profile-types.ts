import { ProfileAttitude } from '../../enums/profile-enums';

import { Nullable } from './nullable';
import { IAddress, IAvatar } from './user-types';

export interface IProfileData {
  username: string;
  avatar: IAvatar;
  firstName: string;
  middleName: Nullable<string>;
  secondName: string;
  gender: string;
  birthDate: string;
  overview: Nullable<string>;
  relationshipStatus: Nullable<string>;
  workplace: Nullable<string>;
  education: Nullable<string>;
  citizenship: Nullable<string>;
  registrationAddress: Nullable<IAddress>;
  residenceAddress: Nullable<IAddress>;
  createAt: string;
  updateAt: string;
  attitude: ProfileAttitude;
}
