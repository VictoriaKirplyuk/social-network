import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { appReducer } from '../app/2-bll/appReducer';
import { authReducer } from '../pages/auth/registration/2-bll/authReducer';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
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
