export type AuthResponse = IAuthResponseSuccess & IResponseError;
export type ResponseUserData = IUserDataResponseSuccess & IResponseError;

interface IAuthResponseSuccess {
  status?: string;
  continuationCode?: string | undefined;
}

interface IUserDataResponseSuccess {
  email: string;
  username: string;
  avatar: IAvatar;
  images: string[];
  firstName: string;
  middleName: string;
  secondName: string;
  birthDate: string;
  createAt: string;
  updateAt: string;
}

interface IAvatar {
  mimeType: string;
  height: number;
  width: number;
  dataSize: string;
  createAt: string; // Date
}

export interface IResponseError {
  code?: string;
  fields?: IFieldsError[] | undefined;
  message?: string;
}

interface IFieldsError {
  field?: string;
  code?: string;
}

export interface IUserData {
  password: string;
  username: string;
  firstName: string;
  middleName: string;
  secondName: string;
  gender: string;
  birthDate: string; // Date
}
