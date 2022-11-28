import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ILoginState {
  isLoggedIn: boolean;
}

const initialState: ILoginState = {
  isLoggedIn: false,
};

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<{ isLoggedIn: boolean }>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const { setIsLoggedIn } = slice.actions;

export const loginReducer = slice.reducer;
