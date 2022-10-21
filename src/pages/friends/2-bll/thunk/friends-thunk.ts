import { createAsyncThunk } from '@reduxjs/toolkit';

import { changeStatus } from '../../../../app/2-bll/appReducer';
import { RequestStatus } from '../../../../enums';
import { appErrorHandler } from '../../../../helpers/app-error-handler/app-error-handler';
import { friendsAPI } from '../../3-dal/friendsAPI';

export const requestFriend = createAsyncThunk('friends/friendRequest', async (username: string, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));

  try {
    await friendsAPI.requestFriend(username);
    thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});

export const getFriendRequests = createAsyncThunk('friends/getFriendRequests', async (params: { page?: number; size?: number }, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));

  try {
    await friendsAPI.getFriendRequests(params.page, params.size);

    thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});
