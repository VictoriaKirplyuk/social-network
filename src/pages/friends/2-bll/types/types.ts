import { ProfileAttitude } from '../../../../enums';

export interface IFriends {
  friendList: IFriendsList;
}

export interface IFriendsList {
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
  attitude: ProfileAttitude;
}
