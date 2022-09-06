import React, { FC } from 'react';

import { Button, Input } from 'antd';
import { useFormik } from 'formik';
import { Navigate } from 'react-router-dom';

import icon from '../../../../assets/icons/icon.jpg';
import { RequestStatus, RouteNames, StepAuth } from '../../../../enums';
import { registrationSchema } from '../../../../helpers/validators/email-or-phone-validators';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import gS from '../../auth.module.css';
import { registration } from '../2-bll/thunk/registration-thunk';

import { IRegistration } from './types/registration-types';

const Registration: FC = () => {
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;
  const stepAuth = useAppSelector(state => state.auth.stepAuth);
  const dispatch = useAppDispatch();

  const initialValues: IRegistration = {
    emailOrPhone: '',
  };

  const { values, errors, touched, handleChange, handleBlur, isValid, handleSubmit } = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    validateOnBlur: true,
    onSubmit: values => {
      dispatch(registration(values.emailOrPhone));
    },
  });

  if (stepAuth === StepAuth.CONFIRMATION) {
    return <Navigate to={RouteNames.REGISTRATION_CONFIRM} />;
  }

  return (
    <div className={gS.formWrapper}>
      <div className={gS.info}>
        <img className={gS.icon} src={icon} alt="Workflow" />
        <h2 className={gS.title}>Sign up an your account</h2>
        <a className={gS.link} href={RouteNames.LOGIN}>
          Already have an account?
        </a>
      </div>
      <form className={gS.form} onSubmit={handleSubmit}>
        <div className={gS.itemForm}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="emailOrPhone" />
          <Input
            disabled={isLoading}
            status={!errors.emailOrPhone || !touched.emailOrPhone ? '' : 'error'}
            placeholder="Email or phone"
            name="emailOrPhone"
            id="emailOrPhone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.emailOrPhone}
          />
          <div className={gS.error}>{touched.emailOrPhone && errors.emailOrPhone && errors.emailOrPhone}</div>
        </div>
        <Button type="primary" htmlType="submit" className={gS.btn} disabled={!isValid} loading={isLoading}>
          Continue
        </Button>
      </form>
    </div>
  );
};

export default Registration;
