import { IMessageData } from './message-type';

export interface IChatInfo {
  id: number;
  targetProfile: ITargetProfile;
  createAt: string;
  updateAt: string;
  messageAllow: boolean;
  unreadMessages: number;
  lastMessage: IMessageData;
}

export interface IChat {
  id: number;
  targetProfile: ITargetProfile;
  createAt: string;
  updateAt: string;
  messageAllow: boolean;
  lastMessages: IMessageData[];
}

interface ITargetProfile {
  username: string;
  firstName: string;
  middleName: string;
  secondName: string;
}
