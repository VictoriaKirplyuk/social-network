import React, { FC } from 'react';

import { Navigate } from 'react-router-dom';

import gS from '../../../common/styles/styles.module.css';
import ChatCard from '../../../components/Cards/ChatCard/ChatCard';
import { RouteNames } from '../../../enums';
import { useAppSelector } from '../../../hooks/redux-hooks';
import pS from '../../Pages.module.css';

const Chats: FC = () => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const chats = false;

  if (!isLoggedIn) {
    return <Navigate to={RouteNames.LOGIN} />;
  }

  return (
    <div className={pS.pageContent}>
      {chats ? (
        <ChatCard />
      ) : (
        <div className={`${gS.block} ${gS.infoBlock}`}>
          <div className={gS.infoField}>No chats</div>
        </div>
      )}
    </div>
  );
};

export default Chats;
