import { instance } from '../../../app/3-dal/instance';

import { IChangeAvatar, ProfileResponse } from './types/profile-api-types';

export const profileAPI = {
  getProfile() {
    return instance.get<ProfileResponse>('profile').then(response => response.data);
  },
  changeAvatar(image: IChangeAvatar) {
    return instance.post<ProfileResponse>('profile/avatar', { image }).then(response => response.data);
  },
  getAnotherProfile(username: string) {
    return instance.get<ProfileResponse>(`profile/${username}`).then(response => response.data);
  },
  getAnotherAvatar(username: string, size: string) {
    // посмотреть что приходит и сделать тип на респонс
    return instance.get(`profile/${username}/avatar?size=${size}`).then(response => response.data);
  },
};
