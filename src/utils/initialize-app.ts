import { Dispatch } from '@reduxjs/toolkit';

import { changeInitialized } from '../app/2-bll/appReducer';
import { setIsLoggedIn } from '../pages/auth/login/2-bll/loginReducer';

import { isJwtTokenValid } from './jwt-token';

export const initializeApp = (dispatch: Dispatch): void => {
  dispatch(changeInitialized({ isInitialized: false }));

  if (isJwtTokenValid()) {
    dispatch(setIsLoggedIn({ isLoggedIn: true }));
  }

  dispatch(changeInitialized({ isInitialized: true }));
};
