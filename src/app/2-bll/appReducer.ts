import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RequestStatus } from '../../enums/app-enums';

interface IAppState {
  status: RequestStatus;
  error: string | undefined; // fix
  isInitialized: boolean;
}

const initialState: IAppState = {
  status: RequestStatus.IDLE,
  error: '',
  isInitialized: false,
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<{ status: RequestStatus }>) => {
      state.status = action.payload.status;
    },
    changeError: (state, action: PayloadAction<{ error: string | undefined }>) => {
      state.error = action.payload.error;
    },
    changeInitialized: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
      state.isInitialized = action.payload.isInitialized;
    },
  },
});

export const { changeStatus, changeError, changeInitialized } = slice.actions;

export const appReducer = slice.reducer;
