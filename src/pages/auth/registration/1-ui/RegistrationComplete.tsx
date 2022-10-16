import React, { FC, useEffect } from 'react';

import { Button, Input } from 'antd';
import { useFormik } from 'formik';
import { Navigate, useSearchParams } from 'react-router-dom';

import icon from '../../../../assets/icons/icon.jpg';
import { RequestStatus, RouteNames, StepAuth } from '../../../../enums';
import { registrationCompleteSchema } from '../../../../helpers/validators/registration-fields-validators';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import gS from '../../auth.module.css';
import { registrationComplete, registrationConfirmLink } from '../2-bll/thunk/registration-thunk';

import { IRegistrationComplete } from './types/registration-complete-types';

const RegistrationComplete: FC = () => {
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;
  const stepAuth = useAppSelector(state => state.auth.stepAuth);
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();

  const initialValues: IRegistrationComplete = {
    password: '',
    confirmPassword: '',
    username: '',
    firstName: '',
    middleName: '',
    secondName: '',
    gender: '',
    birthDate: '',
  };

  const { values, errors, touched, handleChange, handleBlur, isValid, handleSubmit } = useFormik({
    initialValues,
    validationSchema: registrationCompleteSchema,
    validateOnBlur: true,
    onSubmit: values => {
      const userData = { ...values };

      delete userData.confirmPassword;
      dispatch(registrationComplete(userData));
    },
  });

  useEffect(() => {
    const confirmCode = searchParams.get('code');

    if (confirmCode) dispatch(registrationConfirmLink(confirmCode));
  }, [dispatch, searchParams]);

  if (stepAuth === StepAuth.SUCCEEDED) {
    return <Navigate to={RouteNames.PROFILE} />;
  }

  return (
    <div className={gS.formWrapper}>
      <div className={gS.info}>
        <img className={gS.icon} src={icon} alt="Workflow" />
        <h2 className={gS.title}>Fill in the registration fields</h2>
      </div>
      <form className={gS.formComplete} onSubmit={handleSubmit}>
        <div className={gS.fieldWrap}>
          <div className={gS.formGroup}>
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
              <label htmlFor="username" />
              <Input
                disabled={isLoading}
                status={!errors.username || !touched.username ? '' : 'error'}
                placeholder="User name"
                name="username"
                id="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              <div className={gS.error}>{touched.username && errors.username && errors.username}</div>
            </div>
            <div className={gS.itemForm}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="firstName" />
              <Input
                disabled={isLoading}
                status={!errors.firstName || !touched.firstName ? '' : 'error'}
                placeholder="First name"
                name="firstName"
                id="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              <div className={gS.error}>{touched.firstName && errors.firstName && errors.firstName}</div>
            </div>
            <div className={gS.itemForm}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="middleName" />
              <Input
                disabled={isLoading}
                status={!errors.middleName || !touched.middleName ? '' : 'error'}
                placeholder="Middle name"
                name="middleName"
                id="middleName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.middleName}
              />
              <div className={gS.error}>{touched.middleName && errors.middleName && errors.middleName}</div>
            </div>
          </div>
          <div className={gS.formGroup}>
            <div className={gS.itemForm}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="confirmPassword" />
              <Input.Password
                disabled={isLoading}
                status={!errors.confirmPassword || !touched.confirmPassword ? '' : 'error'}
                placeholder="Confirm password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              <div className={gS.error}>{touched.confirmPassword && errors.confirmPassword && errors.confirmPassword}</div>
            </div>
            <div className={gS.itemForm}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="secondName" />
              <Input
                disabled={isLoading}
                status={!errors.secondName || !touched.secondName ? '' : 'error'}
                placeholder="Second name"
                name="secondName"
                id="secondName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.secondName}
              />
              <div className={gS.error}>{touched.secondName && errors.secondName && errors.secondName}</div>
            </div>
            <div className={gS.itemForm}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="gender" />
              <select disabled={isLoading} placeholder="Gender" className={gS.formField} id="gender" onChange={handleChange} onBlur={handleBlur}>
                <option value="MALE" label="Male">
                  Male
                </option>
                <option value="FEMALE" label="Female">
                  Female
                </option>
              </select>
            </div>
            <div className={gS.itemForm}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="birthDate" />
              <input
                disabled={isLoading}
                type="date"
                value={values.birthDate}
                className={gS.formField}
                placeholder="Birth date"
                name="birthDate"
                id="birthDate"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
        </div>
        <Button type="primary" htmlType="submit" className={gS.btn} disabled={!isValid} loading={isLoading}>
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default RegistrationComplete;
