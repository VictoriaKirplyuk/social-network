import React, { FC } from 'react';

import AppRouter from '../components/AppRouter/AppRouter';
import Navbar from '../components/Navbar/Navbar';
import { useAppSelector } from '../hooks/redux-hooks';

import LoadingPage from './loading-page/LoadingPage';
import s from './Pages.module.css';

const Pages: FC = () => {
  const isInitialized = useAppSelector(state => state.app.isInitialized);
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);

  return isInitialized ? (
    <>
      {isLoggedIn && <Navbar />}
      <div className={s.appLayoutContent}>
        <AppRouter />
      </div>
    </>
  ) : (
    <LoadingPage />
  );
};

export default Pages;
