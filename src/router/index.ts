import * as React from 'react';

import { RouteNames } from '../enums';
import Login from '../pages/auth/login/1-ui/Login';
import Registration from '../pages/auth/registration/1-ui/Registration';
import RegistrationComplete from '../pages/auth/registration/1-ui/RegistrationComplete';
import RegistrationConfirmCode from '../pages/auth/registration/1-ui/RegistrationConfirmCode';
import ResetPassword from '../pages/auth/reset-password/1-ui/ResetPassword';
import ResetPasswordConfirmCode from '../pages/auth/reset-password/1-ui/ResetPasswordConfirmCode';
import Chats from '../pages/chats/1-ui/Chats';
import Messages from '../pages/messages/1-ui/Messages';
import NotFound from '../pages/not-found/NotFound';
import Profile from '../pages/profile/1-ui/Profile';

export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export const publicRouter: IRoute[] = [
  { path: RouteNames.DEFAULT, component: Login },
  { path: RouteNames.LOGIN, component: Login },
  { path: RouteNames.REGISTRATION, component: Registration },
  { path: RouteNames.REGISTRATION_CONFIRM, component: RegistrationConfirmCode },
  { path: RouteNames.REGISTRATION_COMPLETE, component: RegistrationComplete },
  { path: RouteNames.RESET_PASSWORD_CONFIRM_CODE, component: ResetPasswordConfirmCode },
  { path: RouteNames.RESET_PASSWORD, component: ResetPassword },
  { path: RouteNames.PROFILE, component: Profile },
  { path: RouteNames.CHATS, component: Chats },
  { path: RouteNames.MESSAGES, component: Messages },
  { path: RouteNames.NOT_FOUND, component: NotFound },
];

// for admin
// export const privateRouter: IRoute = []
