export enum RouteNames {
  DEFAULT = '/',
  LOGIN = '/login',
  PROFILE = '/profile/*',
  NOT_FOUND = '/*',
  REGISTRATION = '/registration',
  REGISTRATION_CODE = '/registration/code',
  REGISTRATION_CONFIRM = '/registration/confirm',
}

export enum RequestStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

export enum StepAuth {
  REGISTRATION = 'registration',
  CONFIRMATION = 'confirmation',
  COMPLETE = 'complete',
  SUCCEEDED = 'succeeded',
}

export enum ErrorRegistrationCode {
  NOT_VALID = 'NOT_VALID',
  TOO_MANY_CONFIRMATION_TRIES = 'TOO_MANY_CONFIRMATION_TRIES',
}
