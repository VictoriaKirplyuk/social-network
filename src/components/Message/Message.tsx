import React, { FC } from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import s from './Message.module.css';

const Message: FC = () => {
  return (
    <div className={s.message}>
      <Avatar size={40} icon={<UserOutlined />} />
      <div className={s.info}>
        <div className={s.description}>
          <div className={s.senderName}>Username</div>
          <div className={s.time}>23:01</div>
        </div>
        <div>Message...</div>
      </div>
    </div>
  );
};

export default Message;
