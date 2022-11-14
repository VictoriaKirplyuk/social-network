import { ProfileAttitude } from '../../../../enums';

export interface IUsers {
  foundUsers: IFoundUsers;
}

export interface IFoundUsers {
  content: IContent[];
  hasNext: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface IContent {
  username: string;
  firstName: string;
  middleName: string | null;
  secondName: string;
  city: string | null;
  birthDate: string;
  attitude: ProfileAttitude;
}
