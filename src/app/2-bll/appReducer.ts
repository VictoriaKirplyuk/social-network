import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RequestStatus } from '../../enums';

const initialState: IApp = {
  status: RequestStatus.IDLE, // происходит ли взаимодействие с сервером
  error: '', // глобальная ошибка
  isInitialized: false,
};

interface IApp {
  status: RequestStatus;
  error: string | undefined;
  isInitialized: boolean;
}

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
