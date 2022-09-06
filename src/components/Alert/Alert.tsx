import React, { FC, useEffect } from 'react';

import { changeError } from '../../app/2-bll/appReducer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';

import s from './Alert.module.css';

const Alert: FC = () => {
  const error = useAppSelector(state => state.app.error);

  const dispatch = useAppDispatch();

  const alertStatus = error !== '';

  useEffect(() => {
    const delay = 3000;

    if (alertStatus) {
      const timeout = setTimeout(() => {
        dispatch(changeError({ error: '' }));
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [error, alertStatus, dispatch]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{alertStatus && <div className={s.alert}>{error}</div>}</>;
};

export default Alert;
