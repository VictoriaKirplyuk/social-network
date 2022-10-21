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
  MESSAGES = '/messages/*',
  USERS = '/users',
  NOT_FOUND = '/*',
}

export enum RequestStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

export enum StepAuth {
  IDLE = 'idle',
  CONFIRMATION = 'confirmation',
  COMPLETE = 'complete',
  SUCCEEDED = 'succeeded',
}

export enum StepResetPassword {
  IDLE = 'idle',
  CONFIRMATION = 'confirmation',
  COMPLETE = 'complete',
  SUCCEEDED = 'succeeded',
}

export enum ErrorRegistrationCode {
  NOT_VALID = 'NOT_VALID',
  TOO_MANY_CONFIRMATION_TRIES = 'TOO_MANY_CONFIRMATION_TRIES',
}
