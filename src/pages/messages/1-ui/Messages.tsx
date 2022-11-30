import React, { ReactElement, useEffect } from 'react';

import { Navigate, useParams } from 'react-router-dom';

import gS from '../../../common/styles/styles.module.css';
import Message from '../../../components/Message/Message';
import Preloader from '../../../components/Preloader/Preloader';
import { RequestStatus } from '../../../enums/app-enums';
import { RouteNames } from '../../../enums/router-enums';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { getChat } from '../../chats/2-bll/thunk/chats-thunk';
import pS from '../../Pages.module.css';

import s from './Messages.module.css';

const Messages = (): ReactElement => {
  const urlParams = useParams<'chatId'>();
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const messages = useAppSelector(state => state.messages.messageList.content);
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;
  const targetFirstName = useAppSelector(state => state.messages.targetProfile.firstName);

  const isLastMessage = (messageIndex: number): boolean => {
    return messageIndex === messages.length - 1;
  };

  useEffect(() => {
    const { chatId } = urlParams;

    if (chatId) {
      dispatch(getChat(chatId));
    }
  }, [dispatch, urlParams]);

  if (!isLoggedIn) {
    return <Navigate to={RouteNames.LOGIN} />;
  }

  return (
    <div className={pS.pageContent}>
      <div className={`${gS.block} ${s.messagesBlock}`}>
        <div className={s.messageList}>
          {!isLoading ? (
            messages.map((message, index) => (
              <Message
                key={message.id}
                targetFirstName={targetFirstName}
                message={message}
                isLastMessage={isLastMessage(index)}
              />
            ))
          ) : (
            <Preloader />
          )}
          {!isLoading && !messages.length && <div className={gS.infoBlockContent}>No messages</div>}
        </div>
        <div className={s.messageSendBlock}>
          <textarea className={s.sendMessageField} placeholder="Write a message..." />
        </div>
      </div>
    </div>
  );
};

export default Messages;
