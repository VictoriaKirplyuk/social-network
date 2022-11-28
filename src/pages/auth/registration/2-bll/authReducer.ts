import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StepAuth } from '../../../../enums/auth-enums';

interface IAuthState {
  stepAuth: StepAuth;
}

const initialState: IAuthState = {
  stepAuth: StepAuth.IDLE,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeStepAuth: (state, action: PayloadAction<{ stepAuth: StepAuth }>) => {
      state.stepAuth = action.payload.stepAuth;
    },
  },
});

export const authReducer = slice.reducer;

export const { changeStepAuth } = slice.actions;
