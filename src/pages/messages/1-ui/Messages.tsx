import React, { FC } from 'react';

import gS from '../../../common/styles/styles.module.css';
import Message from '../../../components/Message/Message';
import pS from '../../Pages.module.css';

import s from './Messages.module.css';

const Messages: FC = () => {
  const messages = true;

  return (
    <div className={pS.pageContent}>
      {messages ? (
        <div className={gS.block}>
          <Message />
        </div>
      ) : (
        <div className={`${gS.block} ${s.noMessages}`}>
          <div className={gS.infoField}>No messages</div>
        </div>
      )}
    </div>
  );
};

export default Messages;
