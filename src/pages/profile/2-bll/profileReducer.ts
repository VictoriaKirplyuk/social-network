import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProfileData } from '../../../common/types/profile-types';

import { IProfileState, ITargetProfileData } from './types/types';

const initialState: IProfileState = {
  currentProfile: {} as IProfileData,
  targetProfile: {} as ITargetProfileData,
};

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setCurrentProfile: (state, action: PayloadAction<IProfileData>) => {
      state.currentProfile = action.payload;
    },
    setTargetProfileInfo: (state, action: PayloadAction<IProfileData>) => {
      const { username, firstName, middleName, secondName } = action.payload;

      state.targetProfile = { username, firstName, middleName, secondName };
    },
  },
});

export const { setCurrentProfile, setTargetProfileInfo } = slice.actions;

export const profileReducer = slice.reducer;
