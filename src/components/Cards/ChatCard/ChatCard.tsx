import React, { ReactElement } from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import gS from '../../../common/styles/styles.module.css';
import { Nullable } from '../../../common/types/nullable';
import { MessageType } from '../../../enums/message-enums';
import { concatUsername } from '../../../utils/concatenation/concatenation';
import { formatMessageSendDate } from '../../../utils/date-and-time-formatters/date-and-time-formatters';
import { lastMessageFormatter } from '../../../utils/messages-formatters/messages-formatters';

import s from './ChatCard.module.css';

interface IChatCardProps {
  firstName: string;
  middleName: Nullable<string>;
  secondName: string;
  messageType: string;
  lastMessage: string;
  unreadMessages: number;
  isRead: boolean;
  sendingDate: string;
}

const ChatCard = ({
  firstName,
  middleName,
  secondName,
  messageType,
  lastMessage,
  unreadMessages,
  isRead,
  sendingDate,
}: IChatCardProps): ReactElement => {
  const senderName: string = concatUsername(firstName, middleName, secondName);
  const readingStyle: string = !isRead ? `${s.unreadChat}` : '';

  const showMessageByType = (): string => {
    if (messageType === MessageType.IMAGE) return 'Image~';
    if (messageType === MessageType.STICKER) return 'Sticker~';

    return lastMessageFormatter(lastMessage);
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
