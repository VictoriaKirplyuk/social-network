import { instance } from '../../../app/3-dal/instance';

import { ISearchData, ResponseUserData, SearchUserResponse } from './types/types';

const defaultPage: number = 0;
const defaultSize: number = 7;

export const usersAPI = {
  // получить информацию о текущем пользователе
  getUser() {
    return instance.get<ResponseUserData>('user').then(response => response.data);
  },
  searchUsers({ page = defaultPage, size = defaultSize }: ISearchData) {
    return instance.get<SearchUserResponse>(`search?page=${page}&size=${size}`).then(response => response.data);
  },
};
