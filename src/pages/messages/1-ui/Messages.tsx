import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react';

import { SendOutlined } from '@ant-design/icons';
import { Navigate, useParams } from 'react-router-dom';

import gS from '../../../common/styles/styles.module.css';
import Message from '../../../components/Message/Message';
import Preloader from '../../../components/Preloader/Preloader';
import { RequestStatus } from '../../../enums/app-enums';
import { RouteNames } from '../../../enums/router-enums';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { concatUsername } from '../../../utils/concatenation/concatenation';
import { getChat, markChatRead } from '../../chats/2-bll/thunk/chats-thunk';
import pS from '../../Pages.module.css';
import { clearMessage } from '../2-bll/messagesReducer';
import { getMessages } from '../2-bll/thunk/messages-thunk';

import s from './Messages.module.css';

const Messages = (): ReactElement => {
  const urlParams = useParams<'chatId'>();
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const messages = useAppSelector(state => state.messages.messageList.content);
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;
  const targetProfile = useAppSelector(state => state.messages.targetProfile);
  const hasNextMessages = useAppSelector(state => state.messages.messageList.hasNext);
  const totalElements = useAppSelector(state => state.messages.messageList.totalElements);
  const currentMessagePage = useAppSelector(state => state.messages.messageList.number);

  const messageListRef = useRef<null | HTMLDivElement>(null);

  const [isFetchingMessages, setIsFetchingMessages] = useState<boolean>(false);

  const targetFullUsername: string = targetProfile.firstName
    ? concatUsername(targetProfile.firstName, targetProfile.middleName, targetProfile.secondName)
    : '...';

  const isLastMessage = (messageIndex: number): boolean => {
    return messageIndex === messages.length - 1;
  };

  const scrollHandler = useCallback((): void => {
    if (isLoading) return;

    const scrollBorderY: number = 100;
    const isFetchingMessages: boolean = messageListRef.current
      ? messageListRef.current?.scrollTop < scrollBorderY
      : false;

    if (isFetchingMessages && messages.length < totalElements) setIsFetchingMessages(true);
  }, [messages.length, totalElements, isLoading]);

  useEffect(() => {
    const messageListElement = messageListRef.current;

    messageListElement?.addEventListener('scroll', scrollHandler);

    return () => {
      messageListElement?.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  useEffect(() => {
    const { chatId } = urlParams;

    if (chatId) dispatch(getChat(chatId));

    return () => {
      dispatch(clearMessage());
    };
  }, [dispatch, urlParams]);

  useEffect(() => {
    const { chatId } = urlParams;

    if (messages.length && chatId) dispatch(markChatRead(chatId));
  }, [dispatch, messages.length, urlParams]);

  useEffect(() => {
    const { chatId } = urlParams;

    if (chatId && hasNextMessages && isFetchingMessages) {
      dispatch(getMessages({ chatId, page: currentMessagePage + 1 }));
      setIsFetchingMessages(false);
    }
  }, [dispatch, urlParams, hasNextMessages, isFetchingMessages, currentMessagePage]);

  if (!isLoggedIn) {
    return <Navigate to={RouteNames.LOGIN} />;
  }

  return (
    <div className={pS.pageContent}>
      <div className={`${gS.block} ${s.messagesBlock}`}>
        <div className={s.headerBlock}>
          <div className={gS.infoField}>{targetFullUsername}</div>
        </div>
        <div className={s.messageList} ref={messageListRef}>
          {messages.map((message, index) => (
            <Message
              key={message.id}
              targetFirstName={targetProfile.firstName}
              message={message}
              isLastMessage={isLastMessage(index)}
            />
          ))}
          {!isLoading && !messages.length && <div className={gS.infoBlockContent}>No messages</div>}
          {isLoading && <Preloader style={s.preloader} />}
        </div>
        <div className={s.messageSendBlock}>
          <div className={s.sendMessageFieldWrapper}>
            <textarea className={s.sendMessageField} placeholder="Write a message..." />
            <SendOutlined className={s.sendBtn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
