import { createAsyncThunk } from '@reduxjs/toolkit';

import { changeStatus } from '../../../../../app/2-bll/appReducer';
import { RequestStatus } from '../../../../../enums/app-enums';
import { appErrorHandler } from '../../../../../utils/app-error-handler/app-error-handler';
import { registerJwtToken } from '../../../../../utils/jwt/jwt';
import { ILogin } from '../../1-ui/types/types';
import { loginAPI } from '../../3-dal/loginAPI';
import { setIsLoggedIn } from '../loginReducer';

export const login = createAsyncThunk('auth/login', async (loginData: ILogin, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));
  try {
    const response = await loginAPI.login(loginData);

    registerJwtToken(response.jwtToken);

    thunkAPI.dispatch(setIsLoggedIn({ isLoggedIn: true }));
    thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});
