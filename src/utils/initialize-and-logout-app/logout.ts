import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import { setIsLoggedIn } from '../../pages/auth/login/2-bll/loginReducer';

export const logout = (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
  localStorage.clear();

  dispatch(setIsLoggedIn({ isLoggedIn: false }));
};
