import { instance } from '../../../app/3-dal/instance';

import { IChangeAvatar, ProfileResponse } from './types/types';

const defaultPhotoSize: string = '150x150';

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
  getAvatar(username: string, size: string = defaultPhotoSize) {
    // посмотреть что приходит и сделать тип на респонс
    return instance.get(`profile/${username}/avatar?size=${size}`).then(response => response.data);
  },
};
