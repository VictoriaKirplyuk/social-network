import React, { FC } from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import gS from '../../../common/styles/styles.module.css';
import { MessageType } from '../../../enums';
import { concatUsername } from '../../../helpers/concatenation/concatenation';
import { formatMessageSendDate } from '../../../helpers/date-and-time-formatters/date-and-time-formatters';

import s from './ChatCard.module.css';

interface IChatCard {
  firstName: string;
  middleName: string | null;
  secondName: string;
  messageType: string;
  lastMessage: string;
  unreadMessages: number;
  isRead: boolean;
  sendingDate: string;
}

const ChatCard: FC<IChatCard> = ({ firstName, middleName, secondName, messageType, lastMessage, unreadMessages, isRead, sendingDate }) => {
  const senderName: string = concatUsername(firstName, middleName, secondName);
  const readingStyle: string = !isRead ? `${s.unreadChat}` : '';

  const showMessageByType = (): string => {
    if (messageType === MessageType.IMAGE) return 'Image~';
    if (messageType === MessageType.STICKER) return 'Sticker~';

    return lastMessage;
  };

  return (
    <div className={`${s.chat} ${readingStyle}`}>
      <Avatar size={70} icon={<UserOutlined />} />
      <div className={s.info}>
        <div className={gS.userInfoField}>{senderName}</div>
        <div className={gS.infoField}>{showMessageByType()}</div>
      </div>
      <div className={s.date}>{formatMessageSendDate(sendingDate)}</div>
      <div className={s.unreadMessages}>{unreadMessages}</div>
    </div>
  );
};

export default ChatCard;
