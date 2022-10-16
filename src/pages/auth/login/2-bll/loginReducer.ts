import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ILogin = {
  isLoggedIn: false,
};

interface ILogin {
  isLoggedIn: boolean;
}

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
