import { ProfileAttitude } from '../../enums';

export interface IUserData {
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

export interface IUserContent {
  username: string;
  firstName: string;
  middleName: string | null;
  secondName: string;
  city: string | null;
  birthDate: string;
  attitude: ProfileAttitude;
}

export interface IAvatar {
  mimeType: string;
  height: number;
  width: number;
  dataSize: string;
  createAt: string;
}

export interface IAddress {
  firstLine: string;
  secondLine: string;
  city: string;
  country: string;
  zipCode: string;
}
