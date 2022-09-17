import { instance } from '../../../app/3-dal/instance';
import { SearchUserResponse } from '../../../types/api-types/user-types/types/user-api-types';
import { ResponseUserData } from '../../../types/api-types/user-types/user-types';

export const userAPI = {
  // получить информацию о текущем пользователе
  getUser() {
    return instance.get<ResponseUserData>('user').then(response => response.data);
  },
  searchUser(
    country?: string,
    city?: string,
    relationshipStatus?: string,
    age?: number,
    ageFrom?: number,
    ageTo?: number,
    page?: number,
    size?: number,
    sort?: string[],
  ) {
    return instance
      .get<SearchUserResponse>(
        `search?country=${country}&city=${city}&relationshipStatus=${relationshipStatus}&age=${age}&ageFrom=${ageFrom}&ageTo=${ageTo}&page=${page}&size=${size}&sort=${sort}`,
      )
      .then(response => response.data);
  },
};
