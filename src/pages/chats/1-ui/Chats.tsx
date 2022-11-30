import React, { ReactElement, useEffect } from 'react';

import { Navigate } from 'react-router-dom';

import gS from '../../../common/styles/styles.module.css';
import ChatCard from '../../../components/Cards/ChatCard/ChatCard';
import Preloader from '../../../components/Preloader/Preloader';
import { RequestStatus } from '../../../enums/app-enums';
import { RouteNames } from '../../../enums/router-enums';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import pS from '../../Pages.module.css';
import { getChats } from '../2-bll/thunk/chats-thunk';

const Chats = (): ReactElement => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const chats = useAppSelector(state => state.chats.chatList.content);
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;

  useEffect(() => {
    dispatch(getChats({}));
  }, [dispatch]);

  if (!isLoggedIn) {
    return <Navigate to={RouteNames.LOGIN} />;
  }

  return (
    <div className={pS.pageContent}>
      <div className={gS.block}>
        {!isLoading ? (
          chats.map(({ id, targetProfile, unreadMessages, lastMessage }) => (
            <ChatCard
              key={id}
              chatId={id}
              firstName={targetProfile.firstName}
              middleName={targetProfile.middleName}
              secondName={targetProfile.secondName}
              messageType={lastMessage.type}
              isRead={lastMessage.isRead}
              unreadMessages={unreadMessages}
              lastMessage={lastMessage.text}
              sendingDate={lastMessage.createAt}
            />
          ))
        ) : (
          <Preloader />
        )}
        {!isLoading && !chats.length && <div className={gS.infoBlockContent}>No chats</div>}
      </div>
    </div>
  );
};

export default Chats;
