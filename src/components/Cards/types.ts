import { Nullable } from '../../common/types/nullable';
import { ProfileAttitude } from '../../enums/profile-enums';

export interface IInfo {
  username: string;
  firstName: string;
  middleName: Nullable<string>;
  secondName: string;
  city: Nullable<string>;
  birthDate: string;
  attitude: ProfileAttitude;
}
