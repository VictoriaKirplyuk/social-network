export type LoginResponse = ILoginResponseSuccess & ILoginResponseError;

export interface ILoginResponseSuccess {
  jwtToken: string;
}

export interface ILoginResponseError {
  code?: string;
  message?: string;
}
