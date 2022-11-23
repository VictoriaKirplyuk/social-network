import { instance } from '../../../../app/3-dal/instance';
import { ILogin } from '../1-ui/types/login-types';

import { LoginResponse } from './types/types';

export const loginAPI = {
  login(loginData: ILogin) {
    return instance.post<LoginResponse>('authenticate', loginData).then(response => response.data);
  },
};
