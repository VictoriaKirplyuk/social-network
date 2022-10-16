import { createAsyncThunk } from '@reduxjs/toolkit';

import { changeStatus } from '../../../../app/2-bll/appReducer';
import { RequestStatus } from '../../../../enums';
import { appErrorHandler } from '../../../../helpers/app-error-handler/app-error-handler';
import { profileAPI } from '../../3-dal/profileAPI';
import { setProfileData } from '../profileReducer';

export const getProfileData = createAsyncThunk('profile/getProfileData', async (params: void, thunkAPI) => {
  thunkAPI.dispatch(changeStatus({ status: RequestStatus.LOADING }));

  try {
    const response = await profileAPI.getProfile();

    thunkAPI.dispatch(setProfileData(response));
    thunkAPI.dispatch(changeStatus({ status: RequestStatus.SUCCEEDED }));
  } catch (e) {
    appErrorHandler(e, thunkAPI.dispatch);
  }
});
