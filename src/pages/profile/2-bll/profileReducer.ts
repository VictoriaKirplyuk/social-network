import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProfileData } from '../../../common/types/profile-types';
import { IAvatar } from '../../../common/types/user-types';
import { ProfileAttitude } from '../../../enums';

const avatarState: IAvatar = {
  mimeType: '',
  height: 0,
  width: 0,
  dataSize: '',
  createAt: '',
};

const initialState: IProfileData = {
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
  attitude: ProfileAttitude.NONE,
};

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<IProfileData>) => {
      return { ...action.payload };
    },
  },
});

export const { setProfileData } = slice.actions;

export const profileReducer = slice.reducer;
