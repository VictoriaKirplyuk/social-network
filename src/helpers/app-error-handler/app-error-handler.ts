import { AnyAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';

import { changeError, changeStatus } from '../../app/2-bll/appReducer';
import { RequestStatus } from '../../enums';
import { IResponseError } from '../../types/api-types/error-types/error-types';

export const appErrorHandler = (e: unknown, dispatch: ThunkDispatch<any, any, AnyAction>): void => {
  const serverCodeError = 500;
  let errorMessage;

  if (axios.isAxiosError(e) && e.response) {
    if (e.response.status < serverCodeError) {
      const error = (e.response?.data as IResponseError).fields;

      if (error) {
        errorMessage = `${error[0]?.field}: ${error[0]?.code}`;
      }
    } else {
      errorMessage = `${e.message}: ${e.code}`;
    }
  }

  dispatch(changeError({ error: errorMessage }));
  dispatch(changeStatus({ status: RequestStatus.FAILED }));
};
