import React, { FC } from 'react';

import { Navigate } from 'react-router-dom';

import gS from '../../../common/styles/styles.module.css';
import Chat from '../../../components/Chat/Chat';
import { RouteNames } from '../../../enums';
import { useAppSelector } from '../../../hooks/redux-hooks';
import pS from '../../Pages.module.css';

import s from './Chats.module.css';

const Chats: FC = () => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const chats = true;

  if (!isLoggedIn) {
    return <Navigate to={RouteNames.LOGIN} />;
  }

  return (
    <div className={pS.pageContent}>
      {chats ? (
        <Chat />
      ) : (
        <div className={`${gS.block} ${s.noChats}`}>
          <div className={gS.infoField}>No chats</div>
        </div>
      )}
    </div>
  );
};

export default Chats;
