import { IResponseError } from '../../../../types/api-types/error-types/error-types';
import { PageResponse } from '../../../../types/api-types/page-types/page-types';

export type ChatsResponse = PageResponse<IChatsContent>;
export type ChatResponse = IChat & IResponseError;

export interface IChatsContent {
  id: number;
  targetProfile: ITargetProfile;
  createAt: string;
  updateAt: string;
  messageAllow: boolean;
  unreadMessages: number;
  lastMessage: ILastMessage;
}

interface ITargetProfile {
  username: string;
  firstName: string;
  middleName: string;
  secondName: string;
}

interface ILastMessage {
  id: number;
  type: string;
  sender: string;
  createAt: string;
  updateAt: string;
  isRead: boolean;
}

interface IChat {
  id: number;
  targetProfile: ITargetProfile;
  createAt: string;
  updateAt: string;
  messageAllow: boolean;
  lastMessages: ILastMessage[];
}
