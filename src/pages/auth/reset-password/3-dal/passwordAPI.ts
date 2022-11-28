import { instance } from '../../../../app/3-dal/instance';
import { AuthResponse } from '../../../../common/types/api-types/auth-types';
import { IResponseError } from '../../../../common/types/api-types/error-types';

export const passwordAPI = {
  reset(phoneOrEmail: string) {
    return instance.post<AuthResponse>('password-reset', { phoneOrEmail }).then(response => response.data);
  },
  resendReset(continuationCode: string) {
    return instance.post<AuthResponse>('password-reset/resend', { continuationCode }).then(response => response.data);
  },
  resetConfirmLink(linkCode: string) {
    return instance
      .post<AuthResponse>(`password-reset/confirm/link?linkCode=${linkCode}`)
      .then(response => response.data);
  },
  resetConfirmCode(continuationCode: string, manualCode: string) {
    return instance
      .post<AuthResponse>('password-reset/confirm/code', {
        continuationCode,
        manualCode,
      })
      .then(response => response.data);
  },
  resetComplete(continuationCode: string, password: string) {
    return instance.post<IResponseError>('password-reset/complete', { continuationCode, password });
  },
};
