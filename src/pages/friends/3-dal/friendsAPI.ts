import { instance } from '../../../app/3-dal/instance';
import { IResponseError } from '../../../common/types/api-types/error-types';

import { FriendsResponse } from './types/types';

const defaultPage: number = 0;
const defaultSize: number = 6;

export const friendsAPI = {
  requestFriend(username: string) {
    return instance.post<IResponseError>(`profile/${username}/friend/request`);
  },
  revokeRequestFriend(username: string) {
    // this type because there is no content
    return instance.delete<IResponseError>(`profile/${username}/friend/request`);
  },
  acceptFriend(username: string) {
    return instance.post<IResponseError>(`friend/incoming/${username}/accept`);
  },
  declineFriend(username: string) {
    return instance.post<IResponseError>(`friend/incoming/${username}/decline`);
  },
  getFriends(page: number = defaultPage, size: number = defaultSize) {
    return instance.get<FriendsResponse>(`friend?page=${page}&size=${size}`).then(response => response.data);
  },
  getUserFriends(username: string, sort?: string[], page: number = defaultPage, size: number = defaultSize) {
    return instance.get<FriendsResponse>(`profile/${username}/friend?page=${page}&size=${size}&sort=${sort}`).then(response => response.data);
  },
  getFriendIncoming(page = defaultPage, size = defaultSize) {
    return instance.get<FriendsResponse>(`friend/incoming?page=${page}&size=${size}`).then(response => response.data);
  },
  getFriendsOutgoing(page = defaultPage, size = defaultSize) {
    return instance.get<FriendsResponse>(`friend/outgoing?page=${page}&size=${size}`).then(response => response.data);
  },
};
