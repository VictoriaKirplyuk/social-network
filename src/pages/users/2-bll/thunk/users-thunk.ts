import { createAsyncThunk } from '@reduxjs/toolkit';

import { changeInitialized, changeStatus } from '../../../../app/2-bll/appReducer';
import { RequestStatus } from '../../../../enums/app-enums';
import { appErrorHandler } from '../../../../utils/app-error-handler/app-error-handler';
import { setIsLoggedIn } from '../../../auth/login/2-bll/loginReducer';
import { usersAPI } from '../../3-dal/usersAPI';
import { setFoundUsers } from '../usersReducer';

export const getUser = createAsyncThunk('users/getUser', async (param: void, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));

  try {
    await usersAPI.getUser();

    thunkAPI.dispatch(setIsLoggedIn({ isLoggedIn: true }));
    thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  } finally {
    thunkAPI.dispatch(changeInitialized({ isInitialized: true }));
  }
});

export const getUsers = createAsyncThunk('users/getUsers', async (param: void, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));

  try {
    const response = await usersAPI.searchUsers({});

    thunkAPI.dispatch(setFoundUsers(response));
    thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});
