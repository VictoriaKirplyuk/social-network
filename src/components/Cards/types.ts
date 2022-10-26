import { ProfileAttitude } from '../../enums';

export interface IInfo {
  username: string;
  firstName: string;
  middleName: string | null;
  secondName: string;
  attitude: ProfileAttitude;
}
