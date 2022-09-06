import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StepAuth } from '../../../../enums';

const initialState: IAuth = {
  stepAuth: StepAuth.REGISTRATION,
};

interface IAuth {
  stepAuth: StepAuth;
}

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
