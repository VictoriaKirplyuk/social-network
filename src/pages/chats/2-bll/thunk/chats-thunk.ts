import { createAsyncThunk } from '@reduxjs/toolkit';

import { changeStatus } from '../../../../app/2-bll/appReducer';
import { RequestStatus } from '../../../../enums/app-enums';
import { appErrorHandler } from '../../../../utils/app-error-handler/app-error-handler';
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
