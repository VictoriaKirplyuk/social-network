import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IChatInfo } from '../../../common/types/chat-types';
import { IPageData } from '../../../common/types/page-types';

import { IChats } from './types/types';

const chatList = {
  totalElements: 0,
  totalPages: 0,
  content: [],
  number: 0,
  size: 0,
  hasNext: false,
};

const initialState: IChats = {
  chatList,
};

const slice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    setChats: (state, action: PayloadAction<IPageData<IChatInfo>>) => {
      state.chatList = action.payload;
    },
  },
});

export const { setChats } = slice.actions;

export const chatsReducer = slice.reducer;
