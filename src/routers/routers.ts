import { ComponentType } from 'react';

import { RouteNames } from '../enums/router-enums';
import Login from '../pages/auth/login/1-ui/Login';
import Registration from '../pages/auth/registration/1-ui/Registration';
import RegistrationComplete from '../pages/auth/registration/1-ui/RegistrationComplete';
import RegistrationConfirmCode from '../pages/auth/registration/1-ui/RegistrationConfirmCode';
import ResetPassword from '../pages/auth/reset-password/1-ui/ResetPassword';
import ResetPasswordConfirmCode from '../pages/auth/reset-password/1-ui/ResetPasswordConfirmCode';
import Chats from '../pages/chats/1-ui/Chats';
import CurrentFriends from '../pages/friends/1-ui/CurrentFriends';
import Friends from '../pages/friends/1-ui/Friends';
import IncomingFriends from '../pages/friends/1-ui/IncomingFriends';
import OutgoingFriends from '../pages/friends/1-ui/OutgoingFriends';
import Messages from '../pages/messages/1-ui/Messages';
import NotFound from '../pages/not-found/NotFound';
import Profile from '../pages/profile/1-ui/Profile';
import Users from '../pages/users/1-ui/Users';

export interface IRoute {
  path: RouteNames;
  component: ComponentType;
}

export const publicRouter: IRoute[] = [
  { path: RouteNames.DEFAULT, component: Profile },
  { path: RouteNames.LOGIN, component: Login },
  { path: RouteNames.REGISTRATION, component: Registration },
  { path: RouteNames.REGISTRATION_CONFIRM, component: RegistrationConfirmCode },
  { path: RouteNames.REGISTRATION_COMPLETE, component: RegistrationComplete },
  { path: RouteNames.RESET_PASSWORD_CONFIRM_CODE, component: ResetPasswordConfirmCode },
  { path: RouteNames.RESET_PASSWORD, component: ResetPassword },
  { path: RouteNames.PROFILE, component: Profile },
  { path: RouteNames.CURRENT_PROFILE, component: Profile },
  { path: RouteNames.FRIENDS, component: Friends },
  { path: RouteNames.CHATS, component: Chats },
  { path: RouteNames.MESSAGES, component: Messages },
  { path: RouteNames.USERS, component: Users },
  { path: RouteNames.NOT_FOUND, component: NotFound },
];

export const friendsRouter: IRoute[] = [
  { path: RouteNames.CURRENT_FRIENDS, component: CurrentFriends },
  { path: RouteNames.INCOMING_FRIENDS, component: IncomingFriends },
  { path: RouteNames.OUTGOING_FRIENDS, component: OutgoingFriends },
];

// for admin
// export const privateRouter: IRoute = []
