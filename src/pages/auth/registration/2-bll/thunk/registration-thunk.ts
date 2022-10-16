import { createAsyncThunk } from '@reduxjs/toolkit';

import { changeStatus } from '../../../../../app/2-bll/appReducer';
import { RequestStatus, StepAuth } from '../../../../../enums';
import { appErrorHandler } from '../../../../../helpers/app-error-handler/app-error-handler';
import { login } from '../../../login/2-bll/thunk/login-thunk';
import { authAPI } from '../../3-dal/authAPI';
import { IRegistrationUserData } from '../../3-dal/types/registration-api-types';
import { changeStepAuth } from '../authReducer';

export const registration = createAsyncThunk('auth/registration', async (phoneOrEmail: string, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));
  try {
    const response = await authAPI.registration(phoneOrEmail);

    sessionStorage.setItem('continuationCode', JSON.stringify(response.continuationCode));
    thunkAPI.dispatch(changeStepAuth({ stepAuth: StepAuth.CONFIRMATION }));
    thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});

export const resendRegistration = createAsyncThunk('auth/resendRegistration', async (param, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));
  try {
    const continuationCode = sessionStorage.getItem('continuationCode');

    if (continuationCode) {
      const response = await authAPI.resendRegistration(JSON.parse(continuationCode));

      sessionStorage.setItem('continuationCode', JSON.stringify(response.continuationCode));
      thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
    }
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});

export const registrationConfirmCode = createAsyncThunk('auth/registrationConfirmCode', async (manualCode: string, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));
  try {
    const continuationCode = sessionStorage.getItem('continuationCode');

    if (continuationCode) {
      const response = await authAPI.registrationConfirmCode(JSON.parse(continuationCode), manualCode);

      sessionStorage.setItem('continuationCode', JSON.stringify(response.continuationCode));
      thunkAPI.dispatch(changeStepAuth({ stepAuth: StepAuth.COMPLETE }));
      thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
    }
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});

export const registrationConfirmLink = createAsyncThunk('auth/registrationConfirmLink', async (linkCode: string, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));
  try {
    const response = await authAPI.registrationConfirmLink(linkCode);

    if (response.continuationCode) {
      sessionStorage.setItem('continuationCode', response.continuationCode);
    }
    thunkAPI.dispatch(changeStepAuth({ stepAuth: StepAuth.COMPLETE }));
    thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});

export const registrationComplete = createAsyncThunk('auth/registrationComplete', async (userData: IRegistrationUserData, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));
  try {
    const continuationCode = sessionStorage.getItem('continuationCode');

    if (continuationCode) {
      const response = await authAPI.registrationComplete(JSON.parse(continuationCode), userData);

      thunkAPI.dispatch(login({ email: response.email, password: userData.password, rememberMe: false }));

      thunkAPI.dispatch(changeStepAuth({ stepAuth: StepAuth.SUCCEEDED }));
    }
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});
