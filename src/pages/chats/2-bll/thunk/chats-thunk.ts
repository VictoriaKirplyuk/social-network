import { createAsyncThunk } from '@reduxjs/toolkit';

import { changeStatus } from '../../../../app/2-bll/appReducer';
import { RequestStatus } from '../../../../enums/app-enums';
import { appErrorHandler } from '../../../../utils/app-error-handler/app-error-handler';
import { makeMessageRead, setTargetProfile } from '../../../messages/2-bll/messagesReducer';
import { getMessages } from '../../../messages/2-bll/thunk/messages-thunk';
import { chatsAPI } from '../../3-dal/chatsAPI';
import { setChats } from '../chatsReducer';

export const getChats = createAsyncThunk(
  'chats/getChats',
  async (params: { page?: number; size?: number }, thunkAPI) => {
    thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));

    try {
      const response = await chatsAPI.getChats();

      thunkAPI.dispatch(setChats(response));
      thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
    } catch (e) {
      appErrorHandler(e, thunkAPI.dispatch);
    }
  },
);

export const getChat = createAsyncThunk('chats/getChat', async (id: string, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));

  try {
    const response = await chatsAPI.getChat(+id);

    thunkAPI.dispatch(setTargetProfile(response.targetProfile));
    thunkAPI.dispatch(getMessages({ chatId: id }));
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});

export const markChatRead = createAsyncThunk('chats/markChatRead', async (id: string, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));

  try {
    await chatsAPI.markRead(+id);

    thunkAPI.dispatch(makeMessageRead());
    thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});
