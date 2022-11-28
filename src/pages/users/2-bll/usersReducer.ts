import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPageData } from '../../../common/types/page-types';
import { IUserContent } from '../../../common/types/user-types';

import { IUsersState } from './types/types';

const foundUsersState = {
  totalElements: 0,
  totalPages: 0,
  content: [],
  number: 0,
  size: 0,
  hasNext: false,
};

const initialState: IUsersState = {
  foundUsers: foundUsersState,
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFoundUsers: (state, action: PayloadAction<IPageData<IUserContent>>) => {
      state.foundUsers = action.payload;
    },
  },
});

export const { setFoundUsers } = slice.actions;

export const usersReducer = slice.reducer;
