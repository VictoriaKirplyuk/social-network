import React, { FC } from 'react';

import { Button, Checkbox, Input } from 'antd';
import { useFormik } from 'formik';
import { Navigate } from 'react-router-dom';

import icon from '../../../../assets/icons/icon.jpg';
import { RequestStatus, RouteNames } from '../../../../enums';
import { loginSchema } from '../../../../helpers/validators/login-fields-validator';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import gS from '../../auth.module.css';
import { login } from '../2-bll/thunk/login-thunk';

import { ILogin } from './types/login-types';

const Login: FC = () => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;
  const dispatch = useAppDispatch();

  const initialValues: ILogin = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isValid } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    validateOnBlur: true,
    onSubmit: values => {
      dispatch(login(values));
    },
  });

  if (isLoggedIn) {
    return <Navigate to={RouteNames.PROFILE} />;
  }

  return (
    <div className={gS.formWrapper}>
      <div className={gS.info}>
        <img className={gS.icon} src={icon} alt="Workflow" />
        <h2 className={gS.title}>Sign in to your account</h2>
        <a className={gS.link} href={RouteNames.REGISTRATION}>
          Don&rsquo;t have an account?
        </a>
      </div>
      <form className={gS.form} onSubmit={handleSubmit}>
        <div className={gS.itemForm}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="email" />
          <Input
            disabled={isLoading}
            status={!errors.email || !touched.email ? '' : 'error'}
            placeholder="Email or phone"
            name="email"
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <div className={gS.error}>{touched.email && errors.email && errors.email}</div>
        </div>
        <div className={gS.itemForm}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="password" />
          <Input.Password
            disabled={isLoading}
            status={!errors.password || !touched.password ? '' : 'error'}
            placeholder="Password"
            name="password"
            id="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <div className={gS.error}>{touched.password && errors.password && errors.password}</div>
        </div>
        <div className={gS.itemForm}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="rememberMe" />
          <Checkbox name="rememberMe" id="rememberMe" onChange={handleChange} checked={values.rememberMe}>
            Remember me
          </Checkbox>
        </div>
        <div className={gS.subLink}>
          <a href={RouteNames.RESET_PASSWORD}>Forgot your password?</a>
        </div>
        <Button type="primary" htmlType="submit" className={gS.btn} disabled={!isValid} loading={isLoading}>
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default Login;
