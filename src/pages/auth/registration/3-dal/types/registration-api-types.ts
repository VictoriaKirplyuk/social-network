export type AuthResponse = AuthResponseSuccess & ResponseError;
export type ResponseUserData = UserDataResponseSuccess & ResponseError;

type AuthResponseSuccess = {
  status?: string;
  continuationCode?: string | undefined;
};

type UserDataResponseSuccess = {
  email: string;
  username: string;
  avatar: Avatar;
  images: string[];
  firstName: string;
  middleName: string;
  secondName: string;
  birthDate: string;
  createAt: string;
  updateAt: string;
};

type Avatar = {
  mimeType: string;
  height: number;
  width: number;
  dataSize: string;
  createAt: string; // Date
};

export type ResponseError = {
  code?: string;
  fields?: FieldsError[] | undefined;
  message?: string;
};

type FieldsError = {
  field?: string;
  code?: string;
};

export type UserData = {
  password: string;
  username: string;
  firstName: string;
  middleName: string;
  secondName: string;
  gender: string;
  birthDate: string; // Date
};
