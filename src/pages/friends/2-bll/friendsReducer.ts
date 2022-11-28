import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPageData } from '../../../common/types/page-types';
import { IUserContent } from '../../../common/types/user-types';

import { IFriendsState } from './types/types';

const friendList = {
  totalElements: 0,
  totalPages: 0,
  content: [],
  number: 0,
  size: 0,
  hasNext: false,
};

const initialState: IFriendsState = {
  friendList,
};

const slice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setFriends: (state, action: PayloadAction<IPageData<IUserContent>>) => {
      state.friendList = action.payload;
    },
  },
});

export const { setFriends } = slice.actions;

export const friendsReducer = slice.reducer;
