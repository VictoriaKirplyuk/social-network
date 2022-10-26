import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProfileDataResponseSuccess } from '../../../types/api-types/profile-types/profile-types';

import { IAvatar, IProfile } from './types/types';

const avatarState: IAvatar = {
  mimeType: '',
  height: 0,
  width: 0,
  dataSize: '',
  createAt: '',
};

const initialState: IProfile = {
  username: '',
  avatar: avatarState,
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
  attitude: null,
};

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<IProfileDataResponseSuccess>) => {
      return { ...action.payload };
    },
  },
});

export const { setProfileData } = slice.actions;

export const profileReducer = slice.reducer;
