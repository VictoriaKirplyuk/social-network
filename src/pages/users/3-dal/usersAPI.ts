import { instance } from '../../../app/3-dal/instance';
import { ISearchData, ResponseUserData, SearchUserResponse } from '../../../types/api-types/user-types/user-types';

const defaultPage: number = 0;
const defaultSize: number = 7;

export const usersAPI = {
  // получить информацию о текущем пользователе
  getUser() {
    return instance.get<ResponseUserData>('user').then(response => response.data);
  },
  searchUsers({ page = defaultPage, size = defaultSize }: ISearchData) {
    return instance
      .get<SearchUserResponse>(
        `search?page=${page}&size=${size}`,
        // `search?country=${country}&city=${city}&relationshipStatus=${relationshipStatus}&age=${age}&ageFrom=${ageFrom}&ageTo=${ageTo}&page=${page}&size=${size}&sort=${sort}`,
      )
      .then(response => response.data);
  },
};
