import React, { FC } from 'react';

import gS from '../../../common/styles/styles.module.css';
import Chat from '../../../components/Chat/Chat';
import pS from '../../Pages.module.css';

import s from './Chats.module.css';
// import { useAppSelector } from "../../../hooks/redux-hooks";
// import { Navigate } from "react-router-dom";
// import { RouteNames } from "../../../enums";

const Chats: FC = () => {
  const chats = true;

  // const isInitialized = useAppSelector(state => state.app.isInitialized);
  //
  // if (!isInitialized) {
  //   return <Navigate to={RouteNames.LOGIN} />;
  // }

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
