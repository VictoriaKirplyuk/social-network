import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProfileDataResponseSuccess } from '../../../types/api-types/profile-types/profile-types';
import { IAvatar } from '../../../types/common-types/common-types';

import { IProfile } from './types/types';

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
  gender: '',
  birthDate: '',
  overview: null,
  relationshipStatus: null,
  workplace: null,
  education: null,
  citizenship: null,
  registrationAddress: null,
  residenceAddress: null,
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
