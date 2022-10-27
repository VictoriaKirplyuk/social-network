import { createAsyncThunk } from '@reduxjs/toolkit';

import { changeStatus } from '../../../../app/2-bll/appReducer';
import { RequestStatus } from '../../../../enums';
import { appErrorHandler } from '../../../../helpers/app-error-handler/app-error-handler';
import { friendsAPI } from '../../3-dal/friendsAPI';
import { setFriends } from '../friendsReducer';

export const getFriends = createAsyncThunk('friends/getFriends', async (params: { page?: number; size?: number }, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));

  try {
    const response = await friendsAPI.getFriends(params.page, params.size);

    thunkAPI.dispatch(setFriends(response));
    thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});

export const requestFriend = createAsyncThunk('friends/friendRequest', async (username: string, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));

  try {
    await friendsAPI.requestFriend(username);

    thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});

export const acceptFriend = createAsyncThunk('friends/acceptFriend', async (username: string, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));
  try {
    await friendsAPI.acceptFriend(username);

    thunkAPI.dispatch(getFriendRequests({}));
    thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});

export const declineFriend = createAsyncThunk('friends/declineFriend', async (username: string, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));
  try {
    await friendsAPI.declineFriend(username);

    thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});

export const getFriendRequests = createAsyncThunk('friends/getFriendRequests', async (params: { page?: number; size?: number }, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));

  try {
    const response = await friendsAPI.getFriendRequests(params.page, params.size);

    thunkAPI.dispatch(setFriends(response));
    thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});
