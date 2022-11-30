import { IMessageData } from './message-type';
import { IUserContent } from './user-types';

export interface IChatInfo {
  id: number;
  targetProfile: IUserContent;
  createAt: string;
  updateAt: string;
  messageAllow: boolean;
  unreadMessages: number;
  lastMessage: IMessageData;
}

export interface IChat {
  id: number;
  targetProfile: IUserContent;
  createAt: string;
  updateAt: string;
  messageAllow: boolean;
  lastMessages: IMessageData[];
}
