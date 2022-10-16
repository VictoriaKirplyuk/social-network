import React, { FC } from 'react';

import AppRouter from '../components/AppRouter/AppRouter';
import Navbar from '../components/Navbar/Navbar';
import { useAppSelector } from '../hooks/redux-hooks';

import LoadingPage from './loading-page/LoadingPage';

const Pages: FC = () => {
  const isInitialized = useAppSelector(state => state.app.isInitialized);

  return isInitialized ? (
    <>
      <Navbar />
      <div className="site-layout-content">
        <AppRouter />
      </div>
    </>
  ) : (
    <LoadingPage />
  );
};

export default Pages;
