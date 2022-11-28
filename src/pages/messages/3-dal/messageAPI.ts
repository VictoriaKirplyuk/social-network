import { instance } from '../../../app/3-dal/instance';
import { IResponseError } from '../../../common/types/api-types/error-types';

import { MessageResponse, MessagesResponse } from './types/types';

export const messageAPI = {
  // создать сообщение
  createMessage(chatId: number) {
    return instance.post(`chat/${chatId}/message`, {});
  },
  // изменение сообщения
  changeMessage(chatId: number, messageId: number, text: string) {
    return instance
      .put<MessageResponse>(`chat/${chatId}/message/${messageId}`, { text })
      .then(response => response.data);
  },
  deleteMessage(chatId: number, messageId: number) {
    return instance.delete<IResponseError>(`chat/${chatId}/message/${messageId}`);
  },
  // получить сообщения
  getMessages(chatId: number, page?: number, size?: number, sort?: string[]) {
    return instance
      .get<MessagesResponse>(`chat/${chatId}/message?page=${page}&size=${size}&sort=${sort}`)
      .then(response => response.data);
  },
};
