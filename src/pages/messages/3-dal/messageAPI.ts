import { instance } from '../../../app/3-dal/instance';
import { IResponseError } from '../../../common/types/api-types/error-types';
import { MessageType } from '../../../enums/message-enums';

import { MessageResponse, MessagesResponse } from './types/types';

const defaultPage: number = 0;
const defaultSize: number = 20;

export const messageAPI = {
  getMessages(chatId: number, sort: string[], page: number = defaultPage, size: number = defaultSize) {
    return instance
      .get<MessagesResponse>(`chat/${chatId}/message?page=${page}&size=${size}&sort=${sort}`)
      .then(response => response.data);
  },
  createTextMessage(chatId: number, type: MessageType.TEXT, text: string) {
    return instance.post<MessageResponse>(`chat/${chatId}/message`, { type, text }).then(response => response.data);
  },
  createImageMessage(chatId: number, type: MessageType.IMAGE, image: string) {
    return instance
      .post<MessageResponse>(`chat/${chatId}/message/image`, { type, image })
      .then(response => response.data);
  },
  changeMessage(chatId: number, messageId: number, text: string) {
    return instance
      .put<MessageResponse>(`chat/${chatId}/message/${messageId}`, { text })
      .then(response => response.data);
  },
  deleteMessage(chatId: number, messageId: number) {
    return instance.delete<IResponseError>(`chat/${chatId}/message/${messageId}`);
  },
};
