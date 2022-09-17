import React, { FC } from 'react';

import { AsyncThunk } from '@reduxjs/toolkit';
import { Button, Input } from 'antd';
import { useFormik } from 'formik';
import { Navigate } from 'react-router-dom';

import icon from '../../../assets/icons/icon.jpg';
import { RequestStatus, RouteNames, StepAuth, StepResetPassword } from '../../../enums';
import { emailOrPhoneSchema } from '../../../helpers/validators/email-or-phone-validators';
import { registrationFieldFormatter } from '../../../helpers/validators/registration-fields-validators';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import gS from '../../../pages/auth/auth.module.css';

import { IEmailOrPhone } from './types/email-or-phone-types';

export interface IEmailOrPhoneProps {
  type: 'registration' | 'reset-password';
  stepToCheck: StepAuth | StepResetPassword;
  title: string;
  subLink?: {
    title: string;
    path: string;
  };
  onSubmit: AsyncThunk<void, string, {}>;
}

const EmailOrPhone: FC<IEmailOrPhoneProps> = ({ type, title, stepToCheck, subLink, onSubmit }) => {
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;

  const dispatch = useAppDispatch();

  const initialValues: IEmailOrPhone = {
    emailOrPhone: '',
  };

  const { values, errors, touched, handleChange, handleBlur, isValid, handleSubmit } = useFormik({
    initialValues,
    validationSchema: emailOrPhoneSchema,
    validateOnBlur: true,
    onSubmit: values => {
      dispatch(onSubmit(registrationFieldFormatter(values.emailOrPhone)));
      console.log(values);
    },
  });

  if (
    (type === 'registration' && stepToCheck === StepAuth.CONFIRMATION) ||
    (type === 'reset-password' && stepToCheck === StepResetPassword.CONFIRMATION)
  )
    return <Navigate to={RouteNames.REGISTRATION_CONFIRM} />;

  return (
    <div className={gS.formWrapper}>
      <div className={gS.info}>
        <img className={gS.icon} src={icon} alt="Workflow" />
        <h2 className={gS.title}>{title}</h2>
        {subLink ? (
          <a className={gS.link} href={subLink.path}>
            {subLink.title}
          </a>
        ) : null}
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

export default EmailOrPhone;
