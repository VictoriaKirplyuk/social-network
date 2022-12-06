import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMessageData } from '../../../common/types/message-type';
import { IPageData } from '../../../common/types/page-types';
import { IUserContent } from '../../../common/types/user-types';

import { IMessagesState } from './types/types';

const messageList = {
  totalElements: 0,
  totalPages: 0,
  content: [],
  number: 0,
  size: 0,
  hasNext: false,
};

const initialState: IMessagesState = {
  messageList,
  targetProfile: {} as IUserContent,
};

const slice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<IPageData<IMessageData>>) => {
      state.messageList = {
        ...action.payload,
        content: !state.messageList.content.length
          ? action.payload.content.reverse()
          : [...action.payload.content.reverse(), ...state.messageList.content],
      };
    },
    setTargetProfile: (state, action: PayloadAction<IUserContent>) => {
      state.targetProfile = action.payload;
    },
    makeMessageRead: state => {
      state.messageList.content = state.messageList.content.map(message =>
        !message.isRead ? { ...message, isRead: true } : message,
      );
    },
    clearMessage: state => {
      state.messageList = messageList;
      state.targetProfile = {} as IUserContent;
    },
  },
});

export const { setMessages, setTargetProfile, makeMessageRead, clearMessage } = slice.actions;

export const messagesReducer = slice.reducer;
