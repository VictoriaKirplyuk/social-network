import React, { FC } from 'react';

import AppRouter from '../components/AppRouter/AppRouter';
import MainNavbar from '../components/Navbars/MainNavbar/MainNavbar';
import { useAppSelector } from '../hooks/redux-hooks';

import LoadingPage from './loading-page/LoadingPage';
import s from './Pages.module.css';

const Pages: FC = () => {
  const isInitialized = useAppSelector(state => state.app.isInitialized);
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);

  return isInitialized ? (
    <>
      {isLoggedIn && <MainNavbar />}
      <div className={s.appLayoutContent}>
        <AppRouter />
      </div>
    </>
  ) : (
    <LoadingPage />
  );
};

export default Pages;
