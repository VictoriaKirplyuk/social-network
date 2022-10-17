import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFoundUsers, IUsers } from './types/types';

const foundUsersState = {
  content: [],
  hasNext: false,
  number: 0,
  size: 0,
  totalElements: 0,
  totalPages: 1,
};

const initialState: IUsers = {
  foundUsers: foundUsersState,
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFoundUsers: (state, action: PayloadAction<IFoundUsers>) => {
      state.foundUsers = action.payload;
    },
  },
});

export const { setFoundUsers } = slice.actions;

export const usersReducer = slice.reducer;
