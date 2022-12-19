import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMessageData } from '../../../common/types/message-type';
import { IPageData } from '../../../common/types/page-types';
import { IUserContent } from '../../../common/types/user-types';
import { SenderType } from '../../../enums/message-enums';

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
    setTargetProfile: (state, action: PayloadAction<IUserContent>) => {
      state.targetProfile = action.payload;
    },
    setMessages: (state, action: PayloadAction<IPageData<IMessageData>>) => {
      state.messageList = {
        ...action.payload,
        content: !state.messageList.content.length
          ? action.payload.content.reverse()
          : [...action.payload.content.reverse(), ...state.messageList.content],
      };
    },
    setMessage: (state, action: PayloadAction<IMessageData>) => {
      state.messageList.content.push(action.payload);
    },
    updateMessage: (state, action: PayloadAction<IMessageData>) => {
      state.messageList.content.forEach(message => (message.id === action.payload.id ? action.payload : message));
    },
    makeMessagesRead: state => {
      state.messageList.content = state.messageList.content.map(message =>
        !message.isRead && message.sender === SenderType.TARGET ? { ...message, isRead: true } : message,
      );
    },
    clearMessages: state => {
      state.messageList = messageList;
      state.targetProfile = {} as IUserContent;
    },
  },
});

export const { setTargetProfile, setMessages, setMessage, makeMessagesRead, clearMessages } = slice.actions;

export const messagesReducer = slice.reducer;
