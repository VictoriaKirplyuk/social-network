import React, { FC, useEffect, useState } from 'react';

import { Button, Input } from 'antd';
import { useFormik } from 'formik';
import { Navigate } from 'react-router-dom';

import icon from '../../../../assets/icons/icon.jpg';
import { RequestStatus, RouteNames, StepAuth } from '../../../../enums';
import { timeFormatter } from '../../../../helpers/time-formatter/time-formatter';
import { codeSchema } from '../../../../helpers/validators/code-validator';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import gS from '../../auth.module.css';
import { registrationConfirmCode, resendRegistration } from '../2-bll/thunk/registration-thunk';

import { IRegistrationConfirm } from './types/registration-confirm-types';

const startSeconds = 90;

const RegistrationCode: FC = () => {
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;
  const stepAuth = useAppSelector(state => state.auth.stepAuth);
  const dispatch = useAppDispatch();

  const [seconds, setSeconds] = useState<number>(startSeconds);
  const timeToCodeRequest = timeFormatter(seconds);
  const initialValues: IRegistrationConfirm = {
    code: '',
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur, isValid } = useFormik({
    initialValues,
    validateOnBlur: true,
    validationSchema: codeSchema,
    onSubmit: values => {
      dispatch(registrationConfirmCode(values.code));
    },
  });

  const fetchCode = (): void => {
    dispatch(resendRegistration());
    setSeconds(startSeconds);
  };

  useEffect(() => {
    const ms = 1000;

    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), ms);
    }
  }, [seconds]);

  if (stepAuth === StepAuth.COMPLETE) {
    return <Navigate to={RouteNames.REGISTRATION_CONFIRM} />;
  }

  return (
    <div className={gS.formWrapper}>
      <div className={gS.info}>
        <img className={gS.icon} src={icon} alt="Workflow" />
        <h2 className={gS.title}>Enter confirmation code</h2>
        <button type="button" className={!seconds ? gS.actionBtn : gS.actionBtnDisabled} onClick={fetchCode} disabled={!!seconds}>
          Send code again {!!seconds && timeToCodeRequest}
        </button>
      </div>
      <form className={gS.form} onSubmit={handleSubmit}>
        <div className={gS.itemForm}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="code" />
          <Input
            disabled={isLoading}
            status={!errors.code || !touched.code ? '' : 'error'}
            placeholder={!errors.code || !touched.code ? 'code' : errors.code}
            name="code"
            id="code"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.code}
          />
        </div>
        <Button type="primary" htmlType="submit" className={gS.btn} disabled={!isValid} loading={isLoading}>
          Confirm
        </Button>
      </form>
    </div>
  );
};

export default RegistrationCode;
