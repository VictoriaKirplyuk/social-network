import React, { FC } from 'react';

import Preloader from '../../components/Preloader/Preloader';

import s from './LoadingPage.module.css';

const LoadingPage: FC = () => {
  return (
    <div className={s.loadingPage}>
      <Preloader size="large" />
    </div>
  );
};

export default LoadingPage;
