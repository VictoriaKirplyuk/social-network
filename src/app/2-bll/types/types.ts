import { RequestStatus } from '../../../enums';

export interface IApp {
  status: RequestStatus;
  error: string | undefined;
  isInitialized: boolean;
}
