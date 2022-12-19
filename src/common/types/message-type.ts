import { MessageEventType, MessageType, SenderType } from '../../enums/message-enums';

export interface IMessageData {
  id: number;
  type: MessageType;
  text: string;
  sender: SenderType;
  createAt: string;
  updateAt: string;
  isRead: boolean;
}

export interface IMessageEvent {
  action: MessageEventType;
  chatId: number;
  message: IMessageData;
}
