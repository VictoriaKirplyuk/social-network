import React, { ReactElement } from 'react';

import { Route, Routes } from 'react-router-dom';

import { publicRouter } from '../../routers/routers';

const AppRouter = (): ReactElement => {
  return (
    <Routes>
      {publicRouter.map(route => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
