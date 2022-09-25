import { FC, useEffect, useState } from 'react';

import { AsyncThunk } from '@reduxjs/toolkit';
import { Button, Input } from 'antd';
import { useFormik } from 'formik';
import { Navigate } from 'react-router-dom';

import icon from '../../../assets/icons/icon.jpg';
import { RequestStatus, RouteNames, StepAuth, StepResetPassword } from '../../../enums';
import { timeFormatter } from '../../../helpers/time-formatter/time-formatter';
import { confirmCodeSchema } from '../../../helpers/validators/confirm-code-validator';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import gS from '../../../pages/auth/auth.module.css';
import { resendRegistration } from '../../../pages/auth/registration/2-bll/thunk/registration-thunk';

import { IConfirmCode } from './types/confirm-code-types';

const startSeconds = 90;

export interface IConfirmCodeProps {
  type: 'registration' | 'reset-password';
  stepToCheck: StepAuth | StepResetPassword;
  onSubmit: AsyncThunk<void, string, {}>;
}

const ConfirmCode: FC<IConfirmCodeProps> = ({ type, stepToCheck, onSubmit }) => {
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;
  const dispatch = useAppDispatch();

  const [seconds, setSeconds] = useState<number>(startSeconds);
  const timeToCodeRequest = timeFormatter(seconds);
  const initialValues: IConfirmCode = {
    code: '',
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur, isValid } = useFormik({
    initialValues,
    validateOnBlur: true,
    validationSchema: confirmCodeSchema,
    onSubmit: values => {
      dispatch(onSubmit(values.code));
    },
  });

  const fetchCode = (): void => {
    dispatch(resendRegistration()); // прокинуть в пропсы
    setSeconds(startSeconds);
  };

  useEffect(() => {
    const ms = 1000;

    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), ms);
    }
  }, [seconds]);

  if (type === 'registration' && stepToCheck === StepAuth.COMPLETE) {
    return <Navigate to={RouteNames.REGISTRATION_COMPLETE} />;
  }
  if (type === 'reset-password' && stepToCheck === StepResetPassword.COMPLETE) {
    // добавить форму
    console.log('new form');
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

export default ConfirmCode;
