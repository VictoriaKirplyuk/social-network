import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { publicRouter } from '../../router';

const AppRouter: FC = () => {
  return (
    <Routes>
      {publicRouter.map(route => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
