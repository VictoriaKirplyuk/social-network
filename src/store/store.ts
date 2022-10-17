import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { appReducer } from '../app/2-bll/appReducer';
import { loginReducer } from '../pages/auth/login/2-bll/loginReducer';
import { authReducer } from '../pages/auth/registration/2-bll/authReducer';
import { passwordReducer } from '../pages/auth/reset-password/2-bll/passwordReducer';
import { profileReducer } from '../pages/profile/2-bll/profileReducer';
import { usersReducer } from '../pages/users/2-bll/usersReducer';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  login: loginReducer,
  password: passwordReducer,
  profile: profileReducer,
  users: usersReducer,
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
