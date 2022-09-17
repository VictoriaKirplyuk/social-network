import { instance } from '../../../app/3-dal/instance';
import { IResponseError } from '../../../types/api-types/error-types/error-types';

import { FriendsResponse } from './types/friend-api-types';

export const friendAPI = {
  requestFriend(username: string) {
    return instance.post<IResponseError>(`profile/${username}/friend/request`);
  },
  acceptFriend(username: string) {
    return instance.post<IResponseError>(`friend/request/${username}/accept`);
  },
  declineFriend(username: string) {
    return instance.post<IResponseError>(`friend/request/${username}/decline`);
  },
  getFriends(page: number, size?: number, sort?: string[]) {
    return instance.get<FriendsResponse>(`friend?page=${page}&size=${size}&sort=${sort}`).then(response => response.data);
  },
  getUserFriends(username: string, page?: number, size?: number, sort?: string[]) {
    return instance.get<FriendsResponse>(`profile/${username}/friend?page=${page}&size=${size}&sort=${sort}`).then(response => response.data);
  },
  getFriendRequests(page?: number, size?: number, sort?: string[]) {
    return instance.get<FriendsResponse>(`friend/requests?page=${page}&size=${size}&sort=${sort}`).then(response => response.data);
  },
};
