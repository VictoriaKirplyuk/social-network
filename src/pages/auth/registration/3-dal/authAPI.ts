import { instance } from '../../../../app/3-dal/instance';

import { AuthResponse, ResponseUserData, UserData } from './types/registration-api-types';

export const authAPI = {
  registration(phoneOrEmail: string) {
    return instance.post<AuthResponse>('registration', { phoneOrEmail }).then(response => response.data);
  },

  resendRegistration(continuationCode: string) {
    return instance.post<AuthResponse>('registration/resend', { continuationCode }).then(response => response.data);
  },

  registrationConfirmLink(linkCode: string) {
    return instance.post<AuthResponse>(`registration/confirm/link?linkCode=${linkCode}`).then(response => response.data);
  },

  registrationConfirmCode(continuationCode: string, manualCode: string) {
    return instance.post<AuthResponse>('registration/confirm/code', { continuationCode, manualCode }).then(response => response.data);
  },

  registrationComplete(continuationCode: string, userData: UserData) {
    return instance.post<ResponseUserData>('registration/complete', { continuationCode, ...userData }).then(response => response.data);
  },
};
