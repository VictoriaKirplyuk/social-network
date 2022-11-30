import { createAsyncThunk } from '@reduxjs/toolkit';

import { changeStatus } from '../../../../app/2-bll/appReducer';
import { RequestStatus } from '../../../../enums/app-enums';
import { appErrorHandler } from '../../../../utils/app-error-handler/app-error-handler';
import { messageAPI } from '../../3-dal/messageAPI';
import { setMessages } from '../messagesReducer';

export const getMessages = createAsyncThunk(
  'messages/getMessages',
  async (params: { chatId: string; page?: number; size?: number }, thunkAPI) => {
    thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));

    try {
      const response = await messageAPI.getMessages(+params.chatId, ['createAt', 'desc'], params.page, params.size);

      thunkAPI.dispatch(setMessages(response));
      thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
    } catch (e) {
      appErrorHandler(e, thunkAPI.dispatch);
    }
  },
);
