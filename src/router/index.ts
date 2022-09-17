import * as React from 'react';

import { RouteNames } from '../enums';
import Login from '../pages/auth/login/1-ui/Login';
import Registration from '../pages/auth/registration/1-ui/Registration';
import RegistrationComplete from '../pages/auth/registration/1-ui/RegistrationComplete';
import RegistrationConfirmCode from '../pages/auth/registration/1-ui/RegistrationConfirmCode';
import ResetPassword from '../pages/auth/reset-password/1-ui/ResetPassword';
import ResetPasswordConfirmCode from '../pages/auth/reset-password/1-ui/ResetPasswordConfirmCode';
import NotFound from '../pages/not-found/NotFound';
import Profile from '../pages/profile/1-ui/Profile';

export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export const defaultRouter: IRoute[] = [
  { path: RouteNames.DEFAULT, component: Login },
  { path: RouteNames.LOGIN, component: Login },
  { path: RouteNames.REGISTRATION, component: Registration },
  { path: RouteNames.REGISTRATION_CONFIRM, component: RegistrationConfirmCode },
  { path: RouteNames.REGISTRATION_COMPLETE, component: RegistrationComplete },
  { path: RouteNames.RESET_PASSWORD_CONFIRM_CODE, component: ResetPasswordConfirmCode },
  { path: RouteNames.RESET_PASSWORD, component: ResetPassword },
  { path: RouteNames.PROFILE, component: Profile },
  { path: RouteNames.NOT_FOUND, component: NotFound },
];
