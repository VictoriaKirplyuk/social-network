import React, { ReactElement } from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { NavLink } from 'react-router-dom';

import gS from '../../../common/styles/styles.module.css';
import { Nullable } from '../../../common/types/nullable';
import { MessageType } from '../../../enums/message-enums';
import { RouteNames } from '../../../enums/router-enums';
import { concatUsername } from '../../../utils/concatenation/concatenation';
import { formatMessageSendDate } from '../../../utils/date-and-time-formatters/date-and-time-formatters';
import { lastMessageFormatter } from '../../../utils/messages-formatters/messages-formatters';

import s from './ChatCard.module.css';

interface IChatCardProps {
  chatId: number;
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
  chatId,
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
  const pathToMessages: string = RouteNames.MESSAGES.replace(':chatId', chatId.toString());

  const showMessageByType = (): string => {
    if (messageType === MessageType.IMAGE) return 'Image~';
    if (messageType === MessageType.STICKER) return 'Sticker~';

    return lastMessageFormatter(lastMessage);
  };

  return (
    <NavLink to={pathToMessages}>
      <div className={`${s.chat} ${readingStyle}`}>
        <Avatar size={70} icon={<UserOutlined />} />
        <div className={s.info}>
          <div className={gS.userInfoField}>{senderName}</div>
          <div className={gS.infoField}>{showMessageByType()}</div>
        </div>
        <div className={s.date}>{formatMessageSendDate(sendingDate)}</div>
        <div className={s.unreadMessages}>{unreadMessages}</div>
      </div>
    </NavLink>
  );
};

export default ChatCard;
