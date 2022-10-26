import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFriends, IFriendsList } from './types/types';

const friendList = {
  content: [],
  hasNext: false,
  number: 0,
  size: 0,
  totalElements: 0,
  totalPages: 1,
};

const initialState: IFriends = {
  friendList,
};

const slice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setFriends: (state, action: PayloadAction<IFriendsList>) => {
      state.friendList = action.payload;
    },
  },
});

export const { setFriends } = slice.actions;

export const friendsReducer = slice.reducer;
