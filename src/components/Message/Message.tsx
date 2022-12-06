import React, { ReactElement, useLayoutEffect, useRef } from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import { IMessageData } from '../../common/types/message-type';
import { MessageType } from '../../enums/message-enums';
import { formatMessageSendDate } from '../../utils/date-and-time-formatters/date-and-time-formatters';

import s from './Message.module.css';

interface IMessageProps {
  targetFirstName: string;
  message: IMessageData;
  isLastMessage: boolean;
}

const Message = ({ targetFirstName, message, isLastMessage }: IMessageProps): ReactElement => {
  const lastMessageElementRef = useRef<null | HTMLDivElement>(null);

  const messageStyle: string = message.isRead ? s.message : `${s.message} ${s.unreadMessage}`;

  const showMessageByType = (): string => {
    if (message.type === MessageType.IMAGE) return 'Image~';
    if (message.type === MessageType.STICKER) return 'Sticker~';

    return message.text;
  };

  useLayoutEffect(() => {
    lastMessageElementRef.current?.scrollIntoView();
  }, []);

  return (
    <div className={messageStyle} ref={isLastMessage ? lastMessageElementRef : null}>
      <div>
        <Avatar size={38} icon={<UserOutlined />} />
      </div>
      <div className={s.info}>
        <div className={s.description}>
          <div className={s.senderName}>{targetFirstName}</div>
          <div className={s.time}>{formatMessageSendDate(message.createAt)}</div>
        </div>
        <div className={s.messageText}>{showMessageByType()}</div>
      </div>
    </div>
  );
};

export default Message;
