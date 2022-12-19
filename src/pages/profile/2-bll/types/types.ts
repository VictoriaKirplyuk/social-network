import { Nullable } from '../../../../common/types/nullable';
import { IProfileData } from '../../../../common/types/profile-types';

export interface IProfileState {
  currentProfile: IProfileData;
  targetProfile: ITargetProfileData;
}

export interface ITargetProfileData {
  username: string;
  firstName: string;
  middleName: Nullable<string>;
  secondName: string;
}
