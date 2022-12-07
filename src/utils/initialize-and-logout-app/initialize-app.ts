import { Dispatch } from '@reduxjs/toolkit';

import { changeInitialized } from '../../app/2-bll/appReducer';
import { setIsLoggedIn } from '../../pages/auth/login/2-bll/loginReducer';
import { isJwtTokenValid } from '../jwt/jwt';

export const initializeApp = (dispatch: Dispatch): void => {
  if (isJwtTokenValid()) {
    dispatch(setIsLoggedIn({ isLoggedIn: true }));
  }

  dispatch(changeInitialized({ isInitialized: true }));
};
