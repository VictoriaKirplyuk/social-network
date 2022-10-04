import React, { FC, useEffect } from 'react';

import AppRouter from '../components/AppRouter/AppRouter';
import Navbar from '../components/Navbar/Navbar';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';

import { getUser } from './users/2-bll/thunk/user-thunk';

const Pages: FC = () => {
  const isInitialized = useAppSelector(state => state.app.isInitialized);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      {isInitialized && <Navbar />}
      <div className="site-layout-content">
        <AppRouter />
      </div>
    </>
  );
};

export default Pages;
