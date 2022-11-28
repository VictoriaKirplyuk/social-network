export enum RouteNames {
  DEFAULT = '/',
  LOGIN = '/login',
  REGISTRATION = '/registration',
  REGISTRATION_CONFIRM = '/registration/confirm/code',
  REGISTRATION_COMPLETE = '/registration/confirm', // complete
  RESET_PASSWORD = '/password/reset',
  RESET_PASSWORD_CONFIRM_CODE = '/password/reset/confirm/code',
  RESET_PASSWORD_COMPLETE = '/password/reset/confirm', // complete
  PROFILE = '/profile',
  CURRENT_PROFILE = '/profile/:username',
  FRIENDS = '/friends/*',
  CURRENT_FRIENDS = 'current',
  INCOMING_FRIENDS = 'incoming',
  OUTGOING_FRIENDS = 'outgoing',
  CHATS = '/chats',
  MESSAGES = 'chat/messages/*',
  USERS = '/users',
  NOT_FOUND = '/*',
}
