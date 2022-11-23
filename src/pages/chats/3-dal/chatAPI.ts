import { instance } from '../../../app/3-dal/instance';
import { IResponseError } from '../../../common/types/api-types/error-types';

import { ChatResponse, ChatsResponse } from './types/types';

export const chatAPI = {
  getChats(page?: number, size?: number) {
    return instance.get<ChatsResponse>(`chat?page=${page}&size=${size}`).then(response => response.data);
  },
  // создает или получает чат с указанным пользователя
  createChat(targetUsername: string) {
    return instance.post<ChatResponse>('chat', { targetUsername });
  },
  blockChat(id: number) {
    return instance.post<ChatResponse>(`chat/${id}/block`).then(response => response.data);
  },
  unblockChat(id: number) {
    return instance.post<ChatResponse>(`chat/${id}/unblock`).then(response => response.data);
  },
  // отмечает сообщения чата как прочитанные
  markRead(id: number) {
    return instance.post<IResponseError>(`chat/${id}/read`).then(response => response);
  },
};
