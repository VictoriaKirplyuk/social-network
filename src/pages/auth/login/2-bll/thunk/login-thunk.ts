import { createAsyncThunk } from '@reduxjs/toolkit';

import { changeInitialized, changeStatus } from '../../../../../app/2-bll/appReducer';
import { RequestStatus } from '../../../../../enums';
import { appErrorHandler } from '../../../../../helpers/app-error-handler/app-error-handler';
import { ILogin } from '../../1-ui/types/login-types';
import { loginAPI } from '../../3-dal/loginAPI';

export const login = createAsyncThunk('auth/login', async (loginData: ILogin, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));
  try {
    const response = await loginAPI.login(loginData);

    localStorage.setItem('jwtToken', JSON.stringify(response.jwtToken));
    thunkAPI.dispatch(changeInitialized({ isInitialized: true }));
    thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});
