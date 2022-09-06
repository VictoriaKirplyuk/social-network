export type LoginResponse = LoginResponseSuccess & LoginResponseError;

export type LoginResponseSuccess = {
  jwtToken: string;
};

export type LoginResponseError = {
  code?: string;
  message?: string;
};
