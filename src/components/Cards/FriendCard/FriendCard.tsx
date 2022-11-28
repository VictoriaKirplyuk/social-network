import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import CardInfo from '../CardInfo/CardInfo';
import cS from '../Cards.module.css';
import { IInfo } from '../types';

interface IFriendCardProps {
  info: IInfo;
}

const FriendCard = ({ info }: IFriendCardProps): ReactElement => {
  return (
    <div className={cS.wrapper}>
      <CardInfo info={info}>
        <NavLink to="#">Send message</NavLink>
      </CardInfo>
    </div>
  );
};

export default FriendCard;
