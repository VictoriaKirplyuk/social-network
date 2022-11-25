import React, { FC, useEffect } from 'react';

import { Navigate } from 'react-router-dom';

import gS from '../../../common/styles/styles.module.css';
import ChatCard from '../../../components/Cards/ChatCard/ChatCard';
import Preloader from '../../../components/Preloader/Preloader';
import { RequestStatus, RouteNames } from '../../../enums';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import pS from '../../Pages.module.css';
import { getChats } from '../2-bll/thunk/chats-thunk';

const Chats: FC = () => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;
  const chats = useAppSelector(state => state.chats.chatList.content);

  const dispatch = useAppDispatch();

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
          chats.map(c => (
            <ChatCard
              key={c.id}
              firstName={c.targetProfile.firstName}
              middleName={c.targetProfile.middleName}
              secondName={c.targetProfile.secondName}
              messageType={c.lastMessage.type}
              isRead={c.lastMessage.isRead}
              unreadMessages={c.unreadMessages}
              lastMessage={c.lastMessage.text}
              sendingDate={c.lastMessage.createAt}
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
