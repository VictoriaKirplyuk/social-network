import { instance } from '../../../../app/3-dal/instance';
import { AuthResponse } from '../../../../common/types/api-types/auth-types';

import { IRegistrationUserData, UserRegistrationResponseData } from './types/types';

export const authAPI = {
  registration(phoneOrEmail: string) {
    // Вынести типы?
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

  registrationComplete(continuationCode: string, userData: IRegistrationUserData) {
    return instance.post<UserRegistrationResponseData>('registration/complete', { continuationCode, ...userData }).then(response => response.data);
  },
};
