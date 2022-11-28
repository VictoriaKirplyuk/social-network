import React, { ReactElement, useEffect } from 'react';

import { changeError } from '../../app/2-bll/appReducer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';

import s from './Alert.module.css';

const Alert = (): ReactElement => {
  const dispatch = useAppDispatch();

  const error = useAppSelector(state => state.app.error);

  useEffect(() => {
    const delay: number = 3000;

    if (error) {
      const timeout = setTimeout(() => {
        dispatch(changeError({ error: '' }));
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [error, dispatch]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{error && <div className={s.alert}>{error}</div>}</>;
};

export default Alert;
