import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StepResetPassword } from '../../../../enums/auth-enums';

interface IPassword {
  stepResetPassword: StepResetPassword;
}

const initialState: IPassword = {
  stepResetPassword: StepResetPassword.IDLE,
};

const slice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    changeStepResetPassword: (state, action: PayloadAction<{ stepResetPassword: StepResetPassword }>) => {
      state.stepResetPassword = action.payload.stepResetPassword;
    },
  },
});

export const passwordReducer = slice.reducer;

export const { changeStepResetPassword } = slice.actions;
