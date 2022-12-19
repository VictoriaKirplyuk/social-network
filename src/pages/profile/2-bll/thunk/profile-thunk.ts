import { createAsyncThunk } from '@reduxjs/toolkit';

import { changeStatus } from '../../../../app/2-bll/appReducer';
import { RequestStatus } from '../../../../enums/app-enums';
import { appErrorHandler } from '../../../../utils/app-error-handler/app-error-handler';
import { profileAPI } from '../../3-dal/profileAPI';
import { setCurrentProfile, setTargetProfileInfo } from '../profileReducer';

export const getProfileData = createAsyncThunk('profile/getProfileData', async (params: void, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));

  try {
    const response = await profileAPI.getProfile();

    thunkAPI.dispatch(setCurrentProfile(response));
    thunkAPI.dispatch(setTargetProfileInfo(response));
    thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});

export const getAnotherProfileData = createAsyncThunk(
  'profile/getAnotherProfileData',
  async (username: string, thunkAPI) => {
    thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));

    try {
      const response = await profileAPI.getAnotherProfile(username);

      thunkAPI.dispatch(setCurrentProfile(response));
      thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
    } catch (e) {
      appErrorHandler(e, thunkAPI.dispatch);
    }
  },
);

export const getAvatar = createAsyncThunk('profile/getAvatar', async (username: string, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));

  try {
    await profileAPI.getAvatar(username);

    thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});
