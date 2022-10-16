import { createAsyncThunk } from '@reduxjs/toolkit';

import { changeInitialized, changeStatus } from '../../../../app/2-bll/appReducer';
import { RequestStatus } from '../../../../enums';
import { appErrorHandler } from '../../../../helpers/app-error-handler/app-error-handler';
import { setIsLoggedIn } from '../../../auth/login/2-bll/loginReducer';
import { userAPI } from '../../3-dal/userAPI';

export const getUser = createAsyncThunk('user/getUser', async (param: void, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));

  try {
    await userAPI.getUser();
    thunkAPI.dispatch(setIsLoggedIn({ isLoggedIn: true }));
    thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  } finally {
    thunkAPI.dispatch(changeInitialized({ isInitialized: true }));
  }
});
