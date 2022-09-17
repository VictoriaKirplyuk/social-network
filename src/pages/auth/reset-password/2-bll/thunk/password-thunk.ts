import { createAsyncThunk } from '@reduxjs/toolkit';

import { changeStatus } from '../../../../../app/2-bll/appReducer';
import { RequestStatus, StepResetPassword } from '../../../../../enums';
import { appErrorHandler } from '../../../../../helpers/app-error-handler/app-error-handler';
import { passwordAPI } from '../../3-dal/passwordAPI';
import { changeStepResetPassword } from '../passwordReducer';

export const resetPassword = createAsyncThunk('password/resetPassword', async (phoneOrEmail: string, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));
  try {
    const response = await passwordAPI.reset(phoneOrEmail);

    console.log(response);

    sessionStorage.setItem('continuationCode', JSON.stringify(response.continuationCode));
    thunkAPI.dispatch(changeStepResetPassword({ stepResetPassword: StepResetPassword.CONFIRMATION }));
    thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});

export const resetPasswordConfirmCode = createAsyncThunk('password/resetPasswordConfirmCode', async (manualCode: string, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));
  try {
    const continuationCode = sessionStorage.getItem('continuationCode');

    if (continuationCode) {
      const response = await passwordAPI.resetConfirmCode(JSON.parse(continuationCode), manualCode);

      console.log(response);

      sessionStorage.setItem('continuationCode', JSON.stringify(response.continuationCode));
      thunkAPI.dispatch(changeStepResetPassword({ stepResetPassword: StepResetPassword.COMPLETE }));
      thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
    }
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});
