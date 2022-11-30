import { instance } from '../../../app/3-dal/instance';
import { IResponseError } from '../../../common/types/api-types/error-types';

import { MessageResponse, MessagesResponse } from './types/types';

const defaultPage: number = 0;
const defaultSize: number = 20;

export const messageAPI = {
  getMessages(chatId: number, sort: string[], page: number = defaultPage, size: number = defaultSize) {
    return instance
      .get<MessagesResponse>(`chat/${chatId}/message?page=${page}&size=${size}&sort=${sort}`)
      .then(response => response.data);
  },
  createMessage(chatId: number) {
    return instance.post(`chat/${chatId}/message`, {});
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
