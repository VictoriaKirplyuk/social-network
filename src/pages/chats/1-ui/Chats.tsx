import React, { FC } from 'react';

import gS from '../../../common/styles/styles.module.css';
import Chat from '../../../components/Chat/Chat';
import pS from '../../Pages.module.css';

import s from './Chats.module.css';

const Chats: FC = () => {
  const chats = true;

  return (
    <div className={pS.pageContent}>
      {chats ? (
        <Chat />
      ) : (
        <div className={`${gS.block} ${s.noChats}`}>
          <div className={gS.infoField}>No chats</div>
        </div>
      )}
    </div>
  );
};

export default Chats;
