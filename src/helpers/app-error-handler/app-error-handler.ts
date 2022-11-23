import axios from 'axios';

import { changeError, changeStatus } from '../../app/2-bll/appReducer';
import { IResponseError } from '../../common/types/api-types/error-types';
import { RequestStatus } from '../../enums';

export const appErrorHandler = (e: unknown, dispatch: any): void => {
  const serverCodeError = 500;
  let errorMessage;

  if (axios.isAxiosError(e) && e.response) {
    if (e.response.status < serverCodeError) {
      const error = (e.response?.data as IResponseError).fields;

      if (error) {
        errorMessage = `${error[0]?.field}: ${error[0]?.code}`;
      } else {
        errorMessage = `${e.message} ${e.code}`;
      }
    } else {
      errorMessage = `${e.message}: ${e.code}`;
    }
  }

  dispatch(changeError({ error: errorMessage }));
  dispatch(changeStatus({ status: RequestStatus.FAILED }));
};
