import { IResponseError } from '../../../../common/types/api-types/error-types';
import { IProfileData } from '../../../../common/types/profile-types';

export type ProfileResponse = IProfileData & IResponseError;

export interface IChangeAvatar {
  image: string;
}
