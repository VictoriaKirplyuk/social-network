export interface IProfile {
  username: string;
  avatar: IAvatar;
  firstName: string;
  middleName: string;
  secondName: string;
  overview: string;
  relationshipStatus: string;
  city: string;
  workplace: string;
  education: string;
  birthDate: string;
  createAt: string;
  updateAt: string;
}

export interface IAvatar {
  mimeType: string;
  height: number;
  width: number;
  dataSize: string;
  createAt: string;
}
