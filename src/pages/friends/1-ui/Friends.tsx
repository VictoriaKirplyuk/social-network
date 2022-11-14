import React, { FC } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import LineNavbar from '../../../components/LineNavbar/LineNavbar';
import { RouteNames } from '../../../enums';
import { useAppSelector } from '../../../hooks/redux-hooks';
import { friendsRouter } from '../../../router';
import pS from '../../Pages.module.css';

export interface INavItem {
  title: string;
  path: RouteNames;
}

const Friends: FC = () => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);

  const navItem: INavItem[] = [
    { title: 'Friends', path: RouteNames.CURRENT_FRIENDS },
    { title: 'Incoming requests', path: RouteNames.INCOMING_FRIENDS },
    { title: 'Outgoing requests', path: RouteNames.OUTGOING_FRIENDS },
  ];

  if (!isLoggedIn) {
    return <Navigate to={RouteNames.LOGIN} />;
  }

  return (
    <div className={pS.pageContent}>
      <LineNavbar items={navItem} />
      <Routes>
        {friendsRouter.map(route => (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </div>
  );
};

export default Friends;
