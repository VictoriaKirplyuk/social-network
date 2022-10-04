import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProfileDataResponseSuccess } from '../3-dal/types/profile-api-types';

import { IAvatar, IProfile } from './types/types';

const AvatarState: IAvatar = {
  mimeType: '',
  height: 0,
  width: 0,
  dataSize: '',
  createAt: '',
};

const profileState: IProfile = {
  username: '',
  avatar: AvatarState,
  firstName: '',
  middleName: '',
  secondName: '',
  overview: '',
  relationshipStatus: '',
  city: '',
  workplace: '',
  education: '',
  birthDate: '',
  createAt: '',
  updateAt: '',
};

const slice = createSlice({
  name: 'app/profile',
  initialState: profileState,
  reducers: {
    setProfileData: (state, action: PayloadAction<IProfileDataResponseSuccess>) => {
      return { ...action.payload };
    },
  },
});

export const { setProfileData } = slice.actions;

export const profileReducer = slice.reducer;
