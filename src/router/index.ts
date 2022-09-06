import * as React from 'react';

import { RouteNames } from '../enums';
import Login from '../pages/auth/login/1-ui/Login';
import Registration from '../pages/auth/registration/1-ui/Registration';
import RegistrationComplete from '../pages/auth/registration/1-ui/RegistrationComplete';
import RegistrationConfirm from '../pages/auth/registration/1-ui/RegistrationConfirm';
import NotFound from '../pages/not-found/NotFound';
import Profile from '../pages/profile/1-ui/Profile';

export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export const defaultRouter: IRoute[] = [
  { path: RouteNames.DEFAULT, component: Login }, // fix + вложенный роут
  { path: RouteNames.LOGIN, component: Login },
  { path: RouteNames.REGISTRATION, component: Registration },
  { path: RouteNames.REGISTRATION_CONFIRM, component: RegistrationConfirm },
  { path: RouteNames.REGISTRATION_COMPLETE, component: RegistrationComplete },
  { path: RouteNames.PROFILE, component: Profile },
  { path: RouteNames.NOT_FOUND, component: NotFound },
];
