import React, { FC } from 'react';

import AppRouter from '../components/AppRouter/AppRouter';
import Navbar from '../components/Navbar/Navbar';

const Pages: FC = () => {
  const isInitialized = true;

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
