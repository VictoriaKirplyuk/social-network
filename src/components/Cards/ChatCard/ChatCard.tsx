import React, { FC } from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import gS from '../../../common/styles/styles.module.css';

import s from './ChatCard.module.css';

const ChatCard: FC = () => {
  return (
    <div className={`${gS.block} ${s.chat}`}>
      <Avatar size={70} icon={<UserOutlined />} />
      <div className={s.info}>
        <div className={gS.userInfoField}>Username</div>
        <div className={gS.infoField}>Message...</div>
      </div>
      <div className={s.date}>Sep 3</div>
    </div>
  );
};

export default ChatCard;
